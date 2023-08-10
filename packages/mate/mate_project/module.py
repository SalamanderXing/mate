import os
from rich import print
from rich.tree import Tree
from typing import Any
import yaml
import re
import ast
import json
from dirhash import dirhash
import ipdb
from .python import Python
from .colors import colors
from beartype import beartype
import ast
import re
import yaml


class Module:
    @beartype
    def __init__(
        self,
        root_path: str,
        python: Python,
        optional: bool = False,
    ):
        assert isinstance(root_path, str)
        self.__name = os.path.basename(root_path)
        self.__root_path = root_path
        self._python = python
        self._errors = []
        self._check_validity(optional)
        self.__doc = self._get_docs()
        self.__yaml = self.__parse_yaml()
        self.__mate_dir = os.path.join(root_path, ".matemodule")

        # FIXME: Disabled hash for now. Screws up with git
        # self._hash = (
        #     dirhash(
        #         root_path,
        #         "sha1",
        #         ignore=["__pycache__", "README.md", "requirements.txt", ".matemodule"],
        #     )
        #     if (os.path.exists(self.root_dir) and os.path.isdir(self.root_dir))
        #     else ""
        # )
        self._hash = ""  # FIXME
        self._exports = self.__collect_exports()
        if self.__class__.__name__ == "Module":
            status_path = os.path.join(self.__mate_dir, "status.json")
            if len(self._exports) == 0:
                self._errors.append(
                    f"No exports found in {self.relative_path}. Consider exporting with 'mate export <module>'"
                )
            # os.makedirs(self.__mate_dir, exist_ok=True)
            # if os.path.exists(status_path):
            #     with open(os.path.join(self.__mate_dir, "status.json"), "r") as f:
            #         status = json.load(f)
            # else:
            #     status = {"hash": "-1", "installed": False}
            # if status["hash"] != self._hash or not os.path.exists(
            #     os.path.join(self.__root_path, "requirements.txt")
            # ):
            #     self._python.pipreqs(self.root_dir)
            #     print(f"Generated requirements for {self.relative_path}")
            #     with open(status_path, "w") as f:
            #         json.dump({"hash": self._hash}, f, indent=2)
            #
            #     self._python.install_module_requirements(self.root_dir)
            #
            # if not status.get("installed", False):
            #     self._python.install_module_requirements(self.root_dir)
            #     # print(f"Installed requirements for {self.relative_path()}")
            #     with open(status_path, "w") as f:
            #         json.dump({"hash": self._hash, "installed": True}, f, indent=2)

    @property
    def root_file(self):
        return (
            self.root_dir
            if not os.path.isdir(self.root_dir)
            else os.path.join(self.root_dir, "__init__.py")
        )

    def _get_docs(self) -> str:
        if not os.path.exists(self.root_dir):
            return ""
        md_path = os.path.join(self.__root_path, "README.md")
        if os.path.exists(md_path):
            with open(md_path, "r") as f:
                return f.read()
        else:
            # gets the docstring of the root module using ast
            with open(os.path.join(self.__root_path, "__init__.py"), "r") as f:
                tree = ast.parse(f.read())
            docstring = ast.get_docstring(tree)
            return docstring if docstring else ""

    @beartype
    def __parse_yaml(self) -> dict[str, Any]:
        # if self.name == "tu":
        #     ipdb.set_trace()
        match = re.search(r"```yaml\n(.*?)\n```", self.__doc, re.DOTALL)
        if match:
            yaml_string = match.group(1)
            try:
                yaml_doc = yaml.safe_load(yaml_string)
                assert isinstance(yaml_doc, dict), "YAML content must be a dictionary."
            except yaml.YAMLError as e:
                raise AssertionError("Invalid YAML content.") from e
        else:
            # If there is no YAML code, create an empty dictionary
            yaml_doc = {}
        return yaml_doc

    def children(self):
        return [v for k, v in self.__dict__.items() if not k.startswith("_")]

    def leaf_modules(self) -> tuple["Module", ...]:
        children = self.children()
        leafs = []
        for child in children:
            if isinstance(child, Module):
                leafs.extend(child.children())
        return tuple(leafs)

    def _check_validity(self, optional: bool) -> None:
        assert (
            self.name.isidentifier()
        ), f"Module name {self.name} is not a valid python identifier. Please rename the module folder to something python friendly (no spaces, '-' or strange characters)"
        if os.path.exists(self.root_dir):
            assert os.path.isdir(self.root_dir), "root_dir must be a directory"
            assert os.path.isfile(
                os.path.join(self.root_dir, "__init__.py")
            ), f"{self.relative_path} must be a python module.\n You should add an __init__.py and import the functions/classes you want to export from there."
        else:
            assert optional, f"root_dir {self.root_dir} does not exist"

    @property
    def errors(self):
        return self._errors

    @property
    def name(self):
        return self.__name

    @property
    def exports(self):
        return self._exports

    @property
    def root_dir(self):
        return self.__root_path

    @property
    def dependencies(self):
        if not os.path.exists(self.root_dir):
            return []
        res = ""
        dep_path = os.path.join(self.__root_path, "requirements.txt")
        if os.path.exists(dep_path):
            with open(dep_path, "r") as f:
                res = f.read()
        return [
            a.split("==") if "==" in a else a for a in res.split("\n") if len(a) > 0
        ]

    @property
    def exists(self):
        return os.path.exists(self.root_dir)

    @property
    def relative_path(self):
        return ".".join(self.__root_path.replace(os.getcwd(), "").split(os.sep)[2:])

    @property
    def tags(self) -> list[str] | None:
        # uba = self.__yaml
        if "tags" in self.__yaml:
            assert isinstance(
                self.__yaml["tags"], list
            ), "tags must be a list in YAML docstring"
            return self.__yaml["tags"]
        return []

    def add_tag(self, new_tag: str) -> None:
        with open(self.root_file, "r") as file:
            raw_file = file.read()

        # Parse the Python file
        with open(self.root_file, "r") as file:
            module = ast.parse(file.read())

        # Extract the docstring
        docstring = ast.get_docstring(module)

        # If there is no docstring, create an empty one
        if docstring is None:
            docstring = ""

        # Extract YAML code from the docstring
        match = re.search(r"```yaml\n(.*?)\n```", docstring, re.DOTALL)
        if match:
            yaml_string = match.group(1)
            try:
                yaml_doc = yaml.safe_load(yaml_string)
                assert isinstance(yaml_doc, dict), "YAML content must be a dictionary."
            except yaml.YAMLError as e:
                raise AssertionError("Invalid YAML content.") from e
        else:
            # If there is no YAML code, create an empty dictionary
            yaml_doc = {}

        # Add the new tag to the 'tags' key, if it's not already present
        if "tags" in yaml_doc:
            assert isinstance(yaml_doc["tags"], list), "'tags' must be a list."
            if new_tag not in yaml_doc["tags"]:
                yaml_doc["tags"].append(new_tag)
        else:
            yaml_doc["tags"] = [new_tag]

        # Replace the YAML code in the docstring
        new_yaml_string = yaml.dump(yaml_doc)

        new_yaml_string = new_yaml_string.encode().decode("unicode_escape")
        new_docstring = re.sub(
            r"```yaml\n(.*?)\n```",
            r"```yaml\n" + new_yaml_string + "```",
            docstring,
            flags=re.DOTALL,
        )

        # If there was no YAML code in the docstring, add it
        if match is None:
            new_docstring += (
                "\n```yaml\n" + new_yaml_string + "```" + "\n" * 2 + raw_file
            )

        # Replace the docstring in the Python file
        new_module = ast.Module(
            body=[ast.Expr(value=ast.Str(s=new_docstring))] + module.body[1:],
            type_ignores=[],
        )
        ast.fix_missing_locations(new_module)
        # new_code = compile(new_module, self.root_file, "exec")

        # Write the modified Python file back to disk
        with open(self.root_file, "w") as file:
            file.write(ast.unparse(new_module))

    def __collect_exports(self) -> dict:
        if not os.path.exists(self.root_dir) or not os.path.isdir(self.root_dir):
            return {}
        with open(os.path.join(self.__root_path, "__init__.py"), "r") as f:
            tree = ast.parse(f.read())
        exports = {}
        for node in ast.walk(tree):
            if isinstance(node, ast.ImportFrom):
                if not (node.level == 1):
                    self._errors.append(
                        f"Only relative imports are allowed in {self.relative_path} (for shearability)."
                    )
                # the module name is the key
                # the value is the import node
                exports[node.module] = node

        return exports

    def __eq__(self, other):
        assert isinstance(other, Module) or isinstance(other, str)
        if isinstance(other, Module):
            return self.__root_path == other.__root_path
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
        assert item in self, f"{item} not found in {self.relative_path}"
        return self._exports[item]

    def inspect(self):
        print(f"Module {self.name}")
        print(f"Path: {self.relative_path}")
        print(f"Exports: {', '.join(self.exports.keys())}")
        if self.__doc:
            print(self.__doc)

    def show(self) -> str:
        children_docs = "\n".join([child.show() for child in self.children()])
        return f"""
    {self.__doc}
    {children_docs}
        """

    def to_md(self):
        return self.__doc

    def to_dict(self):
        return {
            "name": self.name,
            "exports": [v.names[0].name for v in self.exports.values()],
            "errors": self.errors,
            "dependencies": self.dependencies,
            "tags": self.tags,
        }
