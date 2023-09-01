import os
from .module import Module
from .experiment import Experiment
from .python import Python
import ipdb
from typing import Any
import yaml
import json


class Hyperparameters:
    valid_extensions = [".yaml", ".yml", ".json"]

    def _assert_is_valid_file(self):
        assert os.path.exists(
            self.root_path
        ), f"Hyperparameters file not found: {self.root_path}"
        assert os.path.isfile(
            self.root_path
        ), f"Hyperparameters is not a file: {self.root_path}"
        assert any(
            self.root_path.endswith(ext) for ext in self.valid_extensions
        ), f"Invalid hyperparameters file: {self.root_path}. Valid extensions: {self.valid_extensions}"

    def _assert_is_valid_dict(self):
        assert isinstance(
            self.hyperparameters, dict
        ), "Hyperparameters should be a dict"
        assert "experiment" in self.hyperparameters, "Missing 'experiment' key."

    def __init__(self, root_path: str, python: Python, optional: bool = False):
        self.root_path = root_path
        self._assert_is_valid_file()
        self.__special_keys = ["experiment", "ssh_command", "remote_dir"]
        special, self.hyperparameters = self.__parse_hyperparameters()
        # for key, val in special.items():
        #     setattr(self, key, val)
        for key in self.__special_keys:
            if key in special:
                setattr(self, key, special[key])
            else:
                setattr(self, key, None)

        if self.ssh_command is not None and self.remote_dir is None:
            self.remote_dir = "~"

    def to_dict(self):
        return {"errors": [], "tags": []}

    def __parse_hyperparameters(self) -> tuple[dict[str, Any], dict[str, Any]]:
        special, hyperparameters = {}, {}
        if self.root_path.endswith(".yaml") or self.root_path.endswith(".yml"):
            with open(self.root_path, "r") as f:
                hyperparameters = yaml.load(f, Loader=yaml.FullLoader)
        elif self.root_path.endswith(".json"):
            with open(self.root_path, "r") as f:
                hyperparameters = json.load(f)
        else:
            raise ValueError(
                f"Invalid hyperparameters file: {self.root_path}. Valid extensions: {self.valid_extensions}"
            )
        for key in self.__special_keys:
            if key in hyperparameters:
                special[key] = hyperparameters.pop(key)
        return special, hyperparameters


class HyperparametersModule(dict):
    extension: str = ".yaml"

    def __init__(
        self,
        root_dir: str,
        python: Python,
        optional=False,
    ):
        # super().__init__(root_dir, python, optional)
        self.root_dir = root_dir
        exps = self.__list_files()
        for path in exps:
            self[os.path.basename(path).split(".")[0]] = Hyperparameters(
                root_path=path,
                python=python,
            )

    def __list_files(self):
        if not os.path.exists(self.root_dir):
            return []
        assert all(
            os.path.isfile(os.path.join(self.root_dir, name))
            for name in os.listdir(self.root_dir)
            if not name.startswith("_")
        ), f"Invalid experiments found in {self.root_dir}"
        return [
            os.path.join(self.root_dir, name)
            for name in os.listdir(self.root_dir)
            if not name.startswith("_")
        ]

    def __contains__(self, item: str):
        return item in self.keys()

    def __str__(self):
        return f"{self.__class__.__name__}(hyperparameters={set(self.keys())})"

    def __repr__(self):
        return self.__str__()

    @property
    def exists(self):
        return os.path.exists(self.root_dir)

    def to_dict(self):
        return {k: e.to_dict() for k, e in self.items()}

    def __getitem__(self, path: str):
        assert isinstance(path, str)
        assert not "." in path, "Experiments don't have submodules"
        assert path in self.keys(), f"Experiment '{path}' not found."
        selected = tuple((k, v) for k, v in self.items() if k == path)[0][1]
        return selected
