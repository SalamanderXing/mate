import ast
from rich.tree import Tree
from rich.text import Text
from .colors import colors
import os
import ipdb


# TODO: assert there is one and only data_loader per experiment
class Experiment:
    def __chech_no_math(self, node: ast.AST):
        # checks that in the entire tree there are no math operations
        def check_math(node: ast.AST):
            if isinstance(node, ast.BinOp):
                self.errors.append(
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
            self.errors.append(
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
                self.errors.append(
                    f"The experiment should only use relative imports from the following modules: {self.allowed_modules}"
                )
            if not (len(relative_import.module.split(".")) == 2):
                self.errors.append(
                    f'ERROR in experiment "{self.name}", line number:{relative_import.lineno}.\n The experiment should not import from a subdirectory of models.\n You should import like so: "from ..models.modelname import ModelClass"'
                )

        self.relative_imports = relative_imports
        self.imports = [node for node in imports if isinstance(node, ast.Import)]

    def __check_experiment(self, raw):
        body = raw.body
        if_statements = [node for node in body if isinstance(node, ast.If)]
        if not (len(if_statements) < 2):
            self.errors.append(
                "The experiment should have at most one if statement (for the condition on train/test)"
            )
        # checks that the other statements are only assignments, function calls and imports
        other_statements = [node for node in body if not isinstance(node, ast.If)]
        for node in other_statements:
            if not isinstance(node, (ast.Assign, ast.Expr, ast.Import, ast.ImportFrom)):
                self.errors.append(
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
            "errors": self.errors,
            "imports": list(self.imports_dict.keys()),
        }

    def show(self):
        header = f"""
        # {self.name}

        ---

        """

        with open(self.experiment_path, "r") as f:
            raw = f.read()
        return str(ast.get_docstring(ast.parse(raw)))

    def __init__(self, allowed_modules: tuple[str], experiment_path: str):
        """Check if the experiment is valid"""
        self.allowed_modules = tuple(allowed_modules)
        with open(experiment_path, "r") as f:
            experiment = ast.parse(f.read())
        self.__check_experiment(experiment)
        self.experiment_path = experiment_path
        self.relative_imports: list[ast.ImportFrom] = []
        self.imports: list[ast.Import] = []
        self.imports_dict: dict[str, dict[str, list[ast.ImportFrom]]] = {}
        self.name = os.path.basename(experiment_path).split(".")[0]
        self.module_path = ".".join(experiment_path[:-3].split(os.sep)[-3:])
        self.errors = []
        self.__get_imports(experiment.body)
        for import_node in self.relative_imports:
            assert (
                import_node.module is not None
            ), "The relative import should have a module"
            if len(import_node.module.split(".")) == 1:
                self.errors.append("The experiment should not import from a root ")
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
        # opens the experiment file and reads it with ast
        # checks that the experiment has only one if statement
