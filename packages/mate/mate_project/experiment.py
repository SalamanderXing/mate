import ast
from rich.tree import Tree
from rich.text import Text
from .python import Python
from .colors import colors
from beartype import beartype
import os
from .module import Module


class Experiment(Module):
    """
    ## Experiments

    Experiments are written in **restricted python**. Meaning it's python but with some limitations that will keep your mate project tidy. The following statements are not supported in a Mate experiment:

     - loops
     - functions
     - math operations
     - only one if-elif statement is allowed. To check the command sent to the experiment (usually `train` or `test`).

    ### Imports
    You should only import from the root of a module.

    For example, this is not a valid import:
    ```python
    from ..models.ae.ae import AE
    ```

    And this is instead valid:

    ```python
    from ..models.ae import AE
    ```

    ### Why these rules?

    A mate experiment, although a subset of python, is just a configuration file where you should put all your hyperparameters. It's meant to be where you import all your modules and organize them together to run your experiment. Defining loops and functions here would imply that you can skip organizing your project into modules and do everything in this file, thus losing all the attractive properties you get from modularity.

    If you're tempted to write functions or loops, maybe you should create a new module.

    ### Mate module inside your experiment

    In your experiment, you usually want to import the `mate` module, like so:

    ```
    from mate import mate
    ```

    This module contains variables and functions that are useful to run your experiment. For example, the `mate.command` contains the command sent to the experiment (usually `train` or `test`). And `mate.result(...)` allows you to save results of your experiments. Check out [its doc page](./mate.md).

    ### Organizing your experiments

    You should create a new experiment for each different configuration you want to run. For example, if you want to run an experiment with a different learning rate, you should create a new experiment. This will keep your experiments organized and easy to find.

    Below you can find an example of a valid mate experiment:


    ```python
    from mate import mate
    from ..models.linear import Net
    from ..trainers.trainer import MNISTModel
    from ..data_loaders.mnist import MNISTDataModule
    from pytorch_lightning import Trainer
    from pytorch_lightning.callbacks.progress import TQDMProgressBar
    import torch


    # Init our model
    mnist_model = MNISTModel(Net())

    data_module = MNISTDataModule()

    # Initialize a trainer
    trainer = Trainer(
        accelerator="auto",
        devices=1 if torch.cuda.is_available() else None,  # limiting got iPython runs
        max_epochs=1,
        callbacks=[TQDMProgressBar(refresh_rate=20)],
    )
    if mate.is_train:
        # Train the model ⚡
        trainer.fit(mnist_model, data_module)
        mate.result(trainer.logged_metrics)
    ```
    """

    def __chech_no_math(self, node: ast.AST):
        # checks that in the entire tree there are no math operations
        def check_math(node: ast.AST):
            if isinstance(node, ast.BinOp):
                self._errors.append(
                    "The experiment should not contain math operations. You should encapsulate the logic into modules and call them  here."
                )
            for child in ast.iter_child_nodes(node):
                check_math(child)

        check_math(node)

    def __repr__(self):
        return f"Experiment {self.name}"

    def __str__(self):
        return self.module_path

    def __get_imports(self, body: list):
        # checks that among the imports there is one called 'mate'
        imports = [
            node for node in body if isinstance(node, (ast.Import, ast.ImportFrom))
        ]
        level_one_imports = [
            node
            for node in imports
            if isinstance(node, ast.ImportFrom)
            if node.level == 1
        ]
        if not (len(level_one_imports) == 0):
            self._errors.append(
                "The experiment should not import from the current directory"
            )
        relative_imports = [
            node
            for node in imports
            if isinstance(node, ast.ImportFrom) and node.level > 1
        ]
        for relative_import in relative_imports:
            assert (
                relative_import.module is not None
            ), "The relative import should have a module"
            module_name = relative_import.module.split(".")[0]
            if module_name not in self.allowed_modules:
                self._errors.append(
                    f"The experiment should only use relative imports from the following modules: {self.allowed_modules}"
                )
            if not (len(relative_import.module.split(".")) == 2):
                self._errors.append(
                    f'ERROR in experiment "{self.name}", line number:{relative_import.lineno}.\n The experiment should not import from a subdirectory of models.\n You should import like so: "from ..models.modelname import ModelClass"'
                )

        self.relative_imports = relative_imports
        self.imports = [node for node in imports if isinstance(node, ast.Import)]

    def __check_experiment(self, raw):
        body = raw.body
        if_statements = [node for node in body if isinstance(node, ast.If)]
        if not (len(if_statements) < 2):
            self._errors.append(
                "The experiment should have at most one if statement (for the condition on train/test)"
            )
        # checks that the other statements are only assignments, function calls and imports
        other_statements = [node for node in body if not isinstance(node, ast.If)]
        for node in other_statements:
            if not isinstance(node, self.__allowed_instructions):
                self._errors.append(
                    "The experiment should only contain assignments, function calls and imports"
                )

        self.__chech_no_math(raw)

    def to_tree(self):
        tree = Tree(
            Text(
                self.name,
                style=f"{colors.experiments} bold underline",
            )
        )
        for module_name, import_nodes in self.imports_dict.items():
            if module_name in self.allowed_modules:
                text = Text(f"{module_name}", style=f"bold {colors[module_name]}")
                module_tree = tree.add(text)
                for module_path, import_nodes in import_nodes.items():
                    module_tree.add(
                        Text(f"{module_path}", style=f"{colors[module_name]}")
                    )
            else:
                # adds the text with an error
                tree.add(Text(f"❌{module_name}", style=f"bold {colors.error}"))

        return tree

    def to_dict(self):
        return {
            "name": self.name,
            "errors": self._errors,
            "imports": list(self.imports_dict.keys()),
            "tags": self.tags,
        }

    def _get_docs(self):
        with open(self.root_dir, "r") as f:
            raw = f.read()
        docstring = ast.get_docstring(ast.parse(raw))
        return str(docstring if docstring else "No docstring")

    def _check_validity(self, optional: bool):
        experiment_path = self.root_dir
        with open(experiment_path, "r") as f:
            experiment = ast.parse(f.read())
        # self.__check_experiment(experiment)
        self.relative_imports: list[ast.ImportFrom] = []
        self.imports: list[ast.Import] = []
        self.imports_dict: dict[str, dict[str, list[ast.ImportFrom]]] = {}
        self.module_path = ".".join(experiment_path[:-3].split(os.sep)[-3:])
        self.__get_imports(experiment.body)
        for import_node in self.relative_imports:
            assert (
                import_node.module is not None
            ), "The relative import should have a module"
            if len(import_node.module.split(".")) == 1:
                self._errors.append("The experiment should not import from a root ")
            else:
                module_name = import_node.module.split(".")[0]
                module_path = import_node.module.split(".")[1]
                if module_name not in self.imports_dict:
                    self.imports_dict[module_name] = {}
                if module_path not in self.imports_dict[module_name]:
                    self.imports_dict[module_name][module_path] = []
                self.imports_dict[module_name][module_path].append(import_node)
        loader_keys = list(self.imports_dict.get("data_loaders", {}).keys())
        self.data_loader: str | None = None
        if len(loader_keys) > 0:
            self.data_loader = loader_keys[0]

    @beartype
    def __init__(self, root_dir: str, python: Python, allowed_modules: tuple[str, ...]):
        """Check if the experiment is valid"""
        self.__allowed_instructions = (
            ast.Assign,
            ast.Expr,
            ast.Import,
            ast.ImportFrom,
            ast.Assert,
        )
        self.allowed_modules = allowed_modules
        super().__init__(root_dir, python)
