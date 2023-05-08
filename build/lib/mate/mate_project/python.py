import os
import subprocess
import sys
import ipdb


class Package:
    def __init__(self, name: str, version: str):
        self.name = name
        self.version = version.strip()  # TODO: add version check

    def __hash__(self):
        return self.name.__hash__()

    def __repr__(self):  #
        return f"Package({self.name}, {self.version})"

    def __eq__(self, other):
        if isinstance(other, str):
            return self.name == other
        elif isinstance(other, Package):
            return self.name == other.name
        else:
            return False


class Python:
    def __init__(self, mate_dir: str, venv: bool = True) -> None:
        self.mate_dir = mate_dir
        self.venv_path = os.path.join(self.mate_dir, "venv")
        os.makedirs(self.venv_path, exist_ok=True)
        self.python_path = (
            os.path.join(self.venv_path, "bin", "python") if venv else sys.executable
        )
        if venv and not os.path.exists(self.python_path):
            print(f"Creating virtual environment in {self.venv_path}")
            os.system(f"python -m venv {self.venv_path}")
            os.system(f"{self.python_path} -m pip install --upgrade pip")
            os.system(f"{self.python_path} -m pip install wheel")
            os.system(f"{self.python_path} -m pip install pipreqs")
            self.__install_mate()
        if venv:
            with open(os.path.join(self.venv_path, "pyvenv.cfg")) as f:
                self.cfg = {
                    key.strip(): val.strip()
                    for key, val in [line.split("=") for line in f.readlines()]
                }
        else:
            self.cfg = {
                "home": sys.executable,
                "include-system-site-packages": "true",
                "version": sys.version,
            }

        self.pipreqs_path = (
            os.path.join(".", self.venv_path, "bin", "pipreqs") if venv else "pipreqs"
        )
        self.requirements_path = os.path.join(self.mate_dir, "requirements.txt")
        command = f"{self.python_path} -m pip freeze"
        output = subprocess.check_output(command, shell=True).decode("utf-8")
        with open(self.requirements_path, "w") as f:
            f.write(output)

        if not self.is_installed("pipreqs"):
            self.pip_install("pipreqs")
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

    def pip_install(self, *packages: str):
        self(f'-m pip install {" ".join(packages)}')
        # adds the packages to the requirements file

    def pip(self, command: str):
        os.system(f"{self.python_path} -m pip {command}")

    @property
    def version(self):
        return self.cfg["version"].split()[0]

    def __call__(self, command: str, print_output: bool = True) -> tuple[int, str]:
        cmd = [self.python_path] + command.split(" ")
        output = ""
        returncode = 0
        if not print_output:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                encoding="utf-8",
            )
            returncode = result.returncode
            output = result.stdout
        else:
            returncode = subprocess.call(cmd)

        # returns the exit code as well as the output
        return returncode, output

    def pipreqs(self, path: str):
        os.system(f"{self.pipreqs_path} --force {path}")
        with open(os.path.join(path, "requirements.txt"), "r") as f:
            requirements = [l for l in f.readlines() if not "==info" in l]
        with open(os.path.join(path, "requirements.txt"), "w") as f:
            f.write("\n".join(requirements))

    def install_packages(self, module_location: str):
        requirements_file = os.path.join(module_location, "requirements.txt")
        requirements = self.__requirements_to_packages(requirements_file)

    def is_installed(self, package: str):
        _, output = self(
            f"""-c 'import importlib.util; print(importlib.util.find_spec("{package}"))'""",
            print_output=False,
        )
        return output != "None"

    def install_module_requirements(self, module_path: str):
        module_required_packages = self.__requirements_to_packages(
            os.path.join(module_path, "requirements.txt")
        )
        # for package in module_required_packages:
        #    self.pip_install(package.name)
        uninstalled_requirements = [
            i for i in module_required_packages if not self.is_installed(i.name)
        ]
        if uninstalled_requirements:
            # ask user if they want to install the requirements
            print(
                f"Module {module_path} requires the following packages to be installed: {uninstalled_requirements}"
            )
            print("Do you want to install them? (y/n)")
            if input() == "y":
                for i in uninstalled_requirements:
                    self.pip_install(i.name)
