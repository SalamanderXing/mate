import os
import ipdb
from .module import Module
from .modules_dict import ModulesDict
from .experiments_module import ExperimentsModule
from .python import Python
import shutil


class MateProject(Module):
    def __init__(self, root_dir: str, python: Python):
        self.__root_dir = root_dir
        self._python = python
        self.models = ModulesDict(os.path.join(root_dir, "models"), python)
        self.data_loaders = ModulesDict(os.path.join(root_dir, "data_loaders"), python)
        self.trainers = ModulesDict(
            os.path.join(root_dir, "trainers"), python, optional=True
        )
        self.experiments = ExperimentsModule(
            tuple(self.__dict__.keys()), os.path.join(root_dir, "experiments"), python
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
                if not k.startswith("_")
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

    def create(self, path: str, name: str):
        assert isinstance(path, str)
        assert isinstance(name, str)
        assert (
            name.isidentifier()
        ), "name must be a valid python identifier. Please use snake_case"
        full_target_path = os.path.join(
            self.__root_dir, path.replace(".", os.sep), name.replace(".", os.sep)
        )
        assert not os.path.exists(
            full_target_path
        ), f"Path {full_target_path} already exists. Try with a different name?"
        if not path == "experiments":
            os.system(f"mkdir -p {full_target_path}")
            os.system(f"touch {full_target_path}/__init__.py")
        else:
            os.system(f"touch {full_target_path}.py")

    def __str__(self):
        dict_str = set(tuple(k for k in self.__dict__.keys() if not k.startswith("_")))
        return f"MateProject(name={self.__name}, submodules={dict_str})"

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
