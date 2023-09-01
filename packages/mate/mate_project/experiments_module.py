import os
from .module import Module
from .experiment import Experiment
from .python import Python
import ipdb
from beartype import beartype


class ExperimentsModule(Module, dict):
    def __init__(
        self,
        allowed_modules: tuple[str, ...],
        root_dir: str,
        python: Python,
        optional=False,
    ):
        super().__init__(root_dir, python, optional)
        exps = self.__list_experiments()
        for path in exps:
            # local_path = ".".join(name[:-3].split(os.sep)[-3:])
            self[os.path.basename(path)[:-3]] = Experiment(
                root_dir=path,
                python=python,
                allowed_modules=allowed_modules,
            )  # local_path
            # check_experiment(name)

    def __list_experiments(self):
        if not os.path.exists(self.root_dir):
            return []
        assert all(
            os.path.isfile(os.path.join(self.root_dir, name))
            for name in os.listdir(self.root_dir)
            if not name.startswith("_")
        ), f"Invalid experiments found in {self.root_dir}"
        assert all(
            name.endswith(".py")
            for name in os.listdir(self.root_dir)
            if not name.startswith("_")
        ), "All files in experiments/ must be python files"
        return [
            os.path.join(self.root_dir, name)
            for name in os.listdir(self.root_dir)
            if not name.startswith("_") and name.endswith(".py")
        ]

    def __contains__(self, item: str):
        return item in self.keys()

    def __str__(self):
        return f"ExperimentsModule(experiments={set(self.keys())})"

    def __repr__(self):
        return self.__str__()

    def to_dict(self):
        return {k: e.to_dict() for k, e in self.items()}

    def __getitem__(self, path: str):
        assert isinstance(path, str)
        assert not "." in path, "Experiments don't have submodules"
        assert path in self.keys(), f"Experiment '{path}' not found."
        selected = tuple((k, v) for k, v in self.items() if k == path)[0][1]
        return selected
