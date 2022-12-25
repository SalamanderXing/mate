import os
from rich.tree import Tree
import ast
import json
from dirhash import dirhash
import ipdb
from .python import Python


class Module:
    def __init__(
        self,
        root_dir: str,
        python: Python,
        optional=False,
    ):
        assert isinstance(root_dir, str)
        self._python = python
        self.__root_dir = root_dir
        self.__name = os.path.basename(root_dir)
        # checks that the name is python-friendly
        self.__errors = []
        assert (
            self.__name.isidentifier()
        ), f"Module name {self.__name} is not a valid python identifier. Please rename the module folder to something python friendly (no spaces, '-' or strange characters)"
        if os.path.exists(root_dir):
            assert os.path.isdir(root_dir), "root_dir must be a directory"
            assert os.path.isfile(
                os.path.join(root_dir, "__init__.py")
            ), f"{self.relative_path()} must be a python module.\n You should add an __init__.py and import the functions/classes you want to export from there."
        else:
            assert optional, f"root_dir {root_dir} does not exist"

        self._hash = dirhash(
            root_dir, "sha1", ignore=["__pycache__", "requirements.txt", ".mate"]
        )
        self.__mate_dir = os.path.join(root_dir, ".mate")
        self._exports = self.__collect_exports()
        if self.__class__.__name__ == "Module":
            status_path = os.path.join(self.__mate_dir, "status.json")
            if len(self._exports) == 0:
                self.__errors.append(
                    f"No exports found in {self.relative_path()}. Consider exporting with 'mate export <module>'"
                )
            os.makedirs(self.__mate_dir, exist_ok=True)
            if os.path.exists(status_path):
                with open(os.path.join(self.__mate_dir, "status.json"), "r") as f:
                    status = json.load(f)
            else:
                status = {"hash": "-1", "installed": False}
            if status["hash"] != self._hash or not os.path.exists(
                os.path.join(self.__root_dir, "requirements.txt")
            ):
                self._python.generate_requirements_single(self.root_dir)
                print(f"Generated requirements for {self.relative_path()}")
                with open(status_path, "w") as f:
                    json.dump({"hash": self._hash}, f, indent=2)

            if not status.get("installed", False):
                self._python.install_module_requirements(self.root_dir)
                print(f"Installed requirements for {self.relative_path()}")
                with open(status_path, "w") as f:
                    json.dump({"hash": self._hash, "installed": True}, f, indent=2)

    @property
    def errors(self):
        return self.__errors

    @property
    def name(self):
        return self.__name

    @property
    def exports(self):
        return self._exports

    @property
    def root_dir(self):
        return self.__root_dir

    def __collect_exports(self) -> dict:
        with open(os.path.join(self.__root_dir, "__init__.py"), "r") as f:
            tree = ast.parse(f.read())
        exports = {}
        for node in ast.walk(tree):
            if isinstance(node, ast.ImportFrom):
                if not (node.level == 1):
                    self.__errors.append(
                        f"Only relative imports are allowed in {self.relative_path()} (for shearability)."
                    )
                # the module name is the key
                # the value is the import node
                exports[node.module] = node

        return exports

    def relative_path(self):
        return ".".join(self.__root_dir.replace(os.getcwd(), "").split(os.sep)[2:])

    def __eq__(self, other):
        assert isinstance(other, Module) or isinstance(other, str)
        if isinstance(other, Module):
            return self.__root_dir == other.__root_dir
        else:
            return self.__name == other

    def __str__(self):
        return self.__name

    def __repr__(self):
        return f"Module(name={self.__name})"

    def __contains__(self, item):
        return item in self.exports.keys()

    def __getitem__(self, item):
        assert isinstance(item, str)
        assert not "." in item, "Cannot access submodules"
        assert item in self, f"{item} not found in {self.relative_path()}"
        return self._exports[item]

    def to_tree(self):
        parent = self.relative_path().split(".")[0]
        tree = Tree(parent, style=f"bold underline {modules[parent].color}")
        node = tree.add(self.name)
        val = self.exports
        for v in val.values():
            node.add(v.names[0].name)
        return tree

    def to_dict(self):
        return {
            "name": self.name,
            "exports": [v.names[0].name for v in self.exports.values()],
            "errors": self.errors,
        }