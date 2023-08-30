import os
import ipdb
from beartype import beartype
from .module import Module
from .modules_dict import ModulesDict
from .experiments_module import ExperimentsModule
from .python import Python
from rich import print
from typing import Optional
import shutil


class MateProject(Module):
    """
    # Mate Project

    The root of a mate project is where you can find the `mate.json`. Mate will generate this file for you when you do `mate init`.

    Mate leverages on modularity. This means that you should organize your project as a set of *independent* modules. Independent means that your modules cannot import each other. This is a good thing because it allows you to reuse your modules in other projects. For example, you can use the same data loader in a different project. This is also a good thing because it allows you to easily test your modules. You can test your data loader without having to test your model or your trainer.

    A python module can *export* objects (such as classes or functions) by adding them to the `__init__.py` file at the root of your module. Notice that you don't have to do this manually, you can do `mate export model.my_model.file_name.ClassName` for example (see the [CLI docs](./cli.md))

    Each module can belong to one of the following categories:

    - **models**: contains the models of your project. If, for example your working with pytorch, each model should be a subclass of `torch.nn.Module`.
    - **data_loaders**: contains the data loaders of your project. If, for example your working with pytorch, each data loader should be a subclass of `torch.utils.data.Dataset`. But mate doesn't check this, so if you want you can also export functions or something else
    - **trainers**: modules in here should contain the training logic/loop.
    - **experiments**: contains the experiments of your project. Each experiment is a python file in charge of running the experiments. See the [experiments docs](./experiments.md) for more info.


    ## File structure of a mate project

    The file structure of a mate project is just a collection of nested python modules (a folder is a python module if it contains a `__init__.py` file, which may be empty). When you do a `mate init` you'll automatically generate a simple mate folder structure.

    Typically, a file structure will look something like this:

    ```
    .
    ├── __init__.py
    ├── data_loaders
    │   ├── __init__.py
    │   └── cifar10_ae
    │       ├── __init__.py
    │       ├── cifar.py
    │       └── requirements.txt
    ├── experiments
    │   ├── __init__.py
    │   └── ae_on_cifar.py
    ├── mate.json
    ├── models
    │   ├── __init__.py
    │   └── ae
    │       ├── __init__.py
    │       ├── ae.py
    │       ├── decoder.py
    │       ├── encoder.py
    │       └── requirements.txt
    └── trainers
        ├── __init__.py
        └── ae_trainer
            ├── __init__.py
            ├── requirements.txt
            └── trainer.py

    8 directories, 18 files
    ```

    And this is how the `mate summary` command displays it:

    <p align="center" style="margin:0; padding:0;">
      <img src="./imgs/summary.svg" alt="Your Image" style="max-width:500px">
    </p>

    To a mate project, the following rules apply:

    - all the `README.md` files are optional but, if present, will be used by the `mate show` command to display a module (with its submodules).
    - In each python module, you may only have the following:
    - an`__init__.py`
    - a readme
    - other submodules
    No other files/folders are allowed. Inside the leaf modules, on the other hand (ex `models/ae`), everything is permitted except for the following rule.
    - Each submodule inside a root module (ex `models/ae`) may not import from other submodules in the mate project, i.e., it has to be isolated.
    - Different rules apply to the experiment's files (ex `experiments/ae_cifar.py`). See the experiments section below.


    """

    def __init__(self, root_dir: str, python: Python):
        self.__root_dir = root_dir
        self._python = python
        self.models = ModulesDict(os.path.join(root_dir, "models"), python)
        self.data_loaders = ModulesDict(os.path.join(root_dir, "data_loaders"), python)
        self.trainers = ModulesDict(
            os.path.join(root_dir, "trainers"), python, optional=True
        )
        # self.analyses = ExperimentsModule(
        #     tuple(self.__dict__.keys()),
        #     os.path.join(root_dir, "analyses"),
        #     python,
        #     optional=True,
        # )
        self.shared = ModulesDict(
            os.path.join(root_dir, "shared"), python, optional=True
        )
        self.experiment_bases = ModulesDict(
            os.path.join(root_dir, "experiment_bases"), python, optional=True
        )
        self.experiments = ExperimentsModule(
            tuple(key for key in self.__dict__.keys() if not key.startswith("_")),
            os.path.join(root_dir, "experiments"),
            python,
        )
        super().__init__(root_dir, python)
        self.__whitelist = ["mate.json", "README.md"]
        self.check_no_additional_dirs()

    def check_no_additional_dirs(self):
        for name in os.listdir(self.__root_dir):
            if (
                not name.startswith("__")
                and (name not in self.__dict__)
                and (name not in self.__whitelist)
            ):
                raise ValueError(
                    f"Found additional file or directory '{name}' in {self.__root_dir}. Please remove it."
                )

    def to_dict(self):
        return {
            "name": self.name,
            "project": {
                k: v.to_dict()
                for k, v in self.__dict__.items()
                if not k.startswith("_") and v.exists
            },
        }

    def clone(self, path: str, name: str):
        assert isinstance(path, str)
        assert isinstance(name, str)
        assert "." in path, "path must be a valid python path (e.g. models.resnet)"
        full_source_path = os.path.join(self.__root_dir, path.replace(".", os.sep))
        full_target_path = os.path.join(
            self.__root_dir, *path.split(".")[:-1], name.replace(".", os.sep)
        )
        if path.startswith("experiments"):
            full_source_path += ".py"
            full_target_path += ".py"

        assert os.path.exists(
            full_source_path
        ), f"Invalid path {path} (full path: {full_source_path})"
        assert not os.path.exists(
            full_target_path
        ), f"Path {full_target_path} already exists. Try with a different name?"
        os.system(f"cp -r {full_source_path} {full_target_path}")

    def remove(self, target: str):
        assert isinstance(target, str)
        full_target_path = os.path.join(self.__root_dir, target.replace(".", os.sep))
        if target.startswith("experiments"):
            full_target_path += ".py"
        assert os.path.exists(
            full_target_path
        ), f"Invalid path {target} (full path: {full_target_path})"
        shutil.rmtree(full_target_path)

    def rename(self, source: str, destination: str):
        assert isinstance(source, str)
        assert isinstance(destination, str)
        assert (
            "." in source
        ), "source must be a valid python path (e.g. models.resnet) and cannot be a root directory"
        full_source_path = os.path.join(self.__root_dir, source.replace(".", os.sep))
        full_destination_path = os.path.join(
            self.__root_dir, *source.split(".")[:-1], destination.replace(".", os.sep)
        )
        if source.startswith("experiments"):
            full_source_path += ".py"
            full_destination_path += ".py"

        assert os.path.exists(
            full_source_path
        ), f"Invalid path {source} (full path: {full_source_path})"
        assert not os.path.exists(
            full_destination_path
        ), f"Path {full_destination_path} already exists. Try with a different name?"
        shutil.move(full_source_path, full_destination_path)

    def exists(self, path: str):
        assert isinstance(path, str)
        full_target_path = os.path.join(self.__root_dir, path.replace(".", os.sep))
        if path.startswith("experiments"):
            full_target_path += ".py"
        return os.path.exists(full_target_path)

    @beartype
    def share(self, source: str, destination: str):
        assert (
            not "." in source
        ), "source must be a submodule of 'shared'. E.g. `mate share utils`"
        full_source = ".".join(("shared", source))
        assert self.exists(full_source), f"Invalid path {source}"
        assert self.exists(destination), f"Invalid path {destination}"
        full_source_path = os.path.join(self.__root_dir, source.replace(".", os.sep))
        full_destination_path = os.path.join(
            self.__root_dir, destination.replace(".", os.sep), source
        )
        assert not os.path.exists(
            full_destination_path
        ), f"Path {full_destination_path} already exists. Maybe rename it?"
        assert not os.path.islink(
            full_destination_path
        ), f"Looks like the destination is already shared."
        # creates a soft link from source to destination
        os.link(full_source_path, full_destination_path)
        print(f"Shared {full_source_path} to {full_destination_path}")

    def create(self, path: str):
        assert isinstance(path, str)
        name: Optional[str] = None
        if "." in path:
            assert (
                len(path.split(".")) == 2
            ), "path must be a valid python path (e.g. models.resnet) and have maximum depth of 2"
            path, name = path.split(".")
            assert (
                name.isidentifier()
            ), "name must be a valid python identifier. Please use snake_case"
        full_target_path = (
            os.path.join(self.__root_dir, path, name)
            if name
            else os.path.join(self.__root_dir, path)
        )
        assert not os.path.exists(
            full_target_path
        ), f"Path {full_target_path} already exists. Try with a different name?"
        if not isinstance(self.__dict__[path], ExperimentsModule) or name is None:
            os.makedirs(full_target_path)
            with open(os.path.join(full_target_path, "__init__.py"), "w") as f:
                f.write("")
        else:
            with open(os.path.join(f"{full_target_path}.py"), "w") as f:
                f.write("")

    def __str__(self):
        dict_str = set(tuple(k for k in self.__dict__.keys() if not k.startswith("_")))
        return f"MateProject(name={self.name}, submodules={dict_str}, location={self.root_dir})"

    def __repr__(self):
        return self.__str__()

    def __getitem__(self, item: str):
        assert isinstance(item, str)
        if item == ".":
            return self
        cur, *rest = item.split(".")
        assert cur in self.__dict__, f"Invalid key {cur}"
        if len(rest) == 0:
            return self.__dict__[cur]
        else:
            return self.__dict__[cur][".".join(rest)]

    def __contains__(self, key: str):
        return key in self.__dict__
