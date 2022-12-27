import os
from .module import Module
from .python import Python

# class ModuleStatus:
#     def __init__(self,):
#         self.name = name
#         self.status = status
#         self.path = path
class ModulesDict(Module, dict):
    def __init__(self, root_dir: str, python: Python, optional=False):
        # lists all the subdirectories and asserts that they are python modules
        if os.path.exists(root_dir):
            subdirs = [
                os.path.join(root_dir, d)
                for d in os.listdir(root_dir)
                if os.path.isdir(os.path.join(root_dir, d)) and not d.startswith("_")
            ]
            # assert all(
            #     os.path.isfile(os.path.join(d, "__init__.py")) for d in subdirs
            # ), f"{d} must be a python module"
            files = [
                os.path.join(root_dir, f)
                for f in os.listdir(root_dir)
                if os.path.isfile(os.path.join(root_dir, f)) and f != "__init__.py"
            ]
            if len(files) > 0:
                console.print(
                    f"[{colors.error} bold]ERROR[/{colors.error} bold]: [yellow]found file(s) in {root_dir}: \n\t{files}[yellow]\nPlease move them to a subfolder or delete them."
                )
                exit(1)

            for d in subdirs:
                self[os.path.basename(d)] = Module(d, python)
        else:
            if not optional:
                print(f"WARNING: {root_dir} does not exist", "yellow")
                os.makedirs(root_dir)
                with open(os.path.join(root_dir, "__init__.py"), "w") as f:
                    f.write("")
                print(f"Created {root_dir}")
        super().__init__(root_dir, python)

    def __str__(self):
        return f"ModulesDict(name={self.__name}, submodules={set(self.keys())})"

    def __repr__(self):
        return self.__str__()

    def to_dict(self):
        return {k: v.to_dict() for k, v in self.items()}

    def __contains__(self, item: str):
        return item in self.keys()

    def __getitem__(self, item):
        assert isinstance(item, str)
        cur, *path = item.split(".")
        assert cur in self, f"Invalid submodule '{self.name}.{cur}'"
        selected = tuple((k, v) for k, v in self.items() if k == cur)[0][1]
        return selected if (len(path) == 0) else selected[".".join(path)]
