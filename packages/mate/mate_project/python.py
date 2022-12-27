import os
import subprocess


class Package:
    def __init__(self, name: str, version: str):
        self.name = name
        self.version = version

    def __hash__(self):
        return self.name.__hash__()

    def __repr__(self):
        return f"Package({self.name}, {self.version})"


class Python:
    def __init__(self, mate_dir: str) -> None:

        self.mate_dir = mate_dir
        self.venv_path = os.path.join(self.mate_dir, "venv")
        os.makedirs(self.venv_path, exist_ok=True)
        self.python_path = os.path.join(self.venv_path, "bin", "python")
        if not os.path.exists(self.python_path):
            print(f"Creating virtual environment in {self.venv_path}")
            os.system(f"python -m venv {self.venv_path}")
            os.system(f"{self.python_path} -m pip install --upgrade pip")
            os.system(f"{self.python_path} -m pip install pipreqs")
            self.__install_mate()

        with open(os.path.join(self.venv_path, "pyvenv.cfg")) as f:
            self.cfg = {
                key.strip(): val.strip()
                for key, val in [line.split("=") for line in f.readlines()]
            }
        self.pipreqs_path = os.path.join(self.venv_path, "bin", "pipreqs")
        if not os.path.exists(self.pipreqs_path):
            self.pip_install("pipreqs")
        self.requirements_path = os.path.join(self.venv_path, "requirements.txt")
        os.system(f"{self.python_path} -m pip freeze > {self.requirements_path}")
        # checks the output of a subprocess using the check_output function
        try:
            # FIXME: handle different mate versions
            command = f"{self.python_path} -m mate"
            output = (
                subprocess.check_output(command, shell=True).decode("utf-8").strip()
            )
            if not output.endswith("installed"):
                self.__install_mate()
        except:
            self.__install_mate()

    def __install_mate(self):

        mate_location = os.sep.join(__file__.split(os.sep)[:-4])
        os.system(f"{self.python_path} -m pip install -e {mate_location}")

    def __requirements_to_packages(self, requirements_path: str):
        with open(requirements_path, "r") as f:
            reqs = [l.split("==") for l in f.readlines()]
        return tuple(Package(r[0], r[1]) for r in reqs if len(r) > 1)

    # def venv(self, command: str):
    #     os.system(f"source {os.path.join(self.venv_path, 'bin', 'activate')}")
    #    #self.

    def pip_install(self, *packages: str):
        self(f'-m pip install {" ".join(packages)}')

    def pip(self, command: str):
        os.system(f"{self.python_path} -m pip {command}")

    @property
    def installed_packages(self):
        return self.__requirements_to_packages(self.requirements_path)

    @property
    def version(self):
        return self.cfg["version"]

    def __call__(self, command: str):
        os.system(f"{self.python_path} {command}")

    def pipreqs(self, path: str):
        os.system(f"{os.path.join('.', self.pipreqs_path)} --force {path}")

    def generate_requirements(self):
        module_paths = [module.root_dir for module in self.project.leaf_modules()]
        for module_path in module_paths:
            self.pipreqs(module_path)

    def generate_requirements_single(self, module_path: str):
        self.pipreqs(module_path)

    def install_packages(self, module_location: str):
        requirements_file = os.path.join(module_location, "requirements.txt")
        requirements = self.__requirements_to_packages(requirements_file)
        # os.system(f"{self.python_path} -m pip install -r {requirements_file}")
        for i in requirements:
            if i not in self.installed_packages:
                self.pip_install(i.name)

    def uninstall_packages(self, module_location: str):
        pass

    def install_module_requirements(self, module_path: str):
        module_required_packages = self.__requirements_to_packages(
            os.path.join(module_path, "requirements.txt")
        )
        for package in module_required_packages:
            if package not in self.installed_packages:
                self.pip_install(package.name)
