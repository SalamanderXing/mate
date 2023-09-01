import os
import subprocess
import sys
import ipdb
from rich import print
import pexpect
import base64


def generate_encoded_tarball(to_tar: str):
    tar_command = ["tar", "-cz", to_tar]
    tar_process = subprocess.Popen(
        tar_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    tar_output, _ = tar_process.communicate()
    encoded_tarball = base64.b64encode(tar_output).decode("utf-8")
    return encoded_tarball


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

    def __call__(
        self,
        command: str,
        print_output: bool = True,
        input: str | None = None,
        ssh_command: str | None = None,
    ) -> tuple[int, str]:
        assert not (
            (input is not None) and not print_output
        ), "Cannot print output and not provide input"
        env = None
        if command.startswith("-m"):
            root_module = command.split(" ")[1].split(".")[0]
            env = os.environ.copy()
            env["PYTHONPATH"] = (
                env.get("PYTHONPATH", "") + f":./{os.path.join(root_module, 'shared')}"
            )
        cmd = [self.python_path] + command.split(" ")
        output = ""
        returncode = 0
        if not print_output:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                encoding="utf-8",
                env=env,
                input=input,
            )
            returncode = result.returncode
            output = result.stdout
        else:
            if input is not None:
                cmd += [input]

            if ssh_command is not None:
                to_tar = cmd[2].split(".")[0]
                encoded_tarball = generate_encoded_tarball(to_tar)
                child = pexpect.spawn(ssh_command)
                child.expect("(venv)")
                child.sendline(
                    f"echo '{encoded_tarball}' | base64 --decode | tar -xz -C /home/bluesk/discrete-graph-diffusion"
                )
                child.sendline(
                    f"(bash -c 'cd /home/bluesk/discrete-graph-diffusion && {' '.join(cmd)}; exit'); exit"
                )
            else:
                child = pexpect.spawn(" ".join(cmd), encoding="utf-8")
            child.interact()

        # returns the exit code as well as the output
        return returncode, output

    def pipreqs(self, path: str):
        # FIXME: pipreqs is too slow

        # os.system(f"{self.pipreqs_path} --force {path}")
        # with open(os.path.join(path, "requirements.txt"), "r") as f:
        #     requirements = [l for l in f.readlines() if not "==info" in l]
        # with open(os.path.join(path, "requirements.txt"), "w") as f:
        #     f.write("\n".join(requirements))
        pass

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
        req_path = os.path.join(module_path, "requirements.txt")
        if os.path.exists(req_path):
            module_required_packages = self.__requirements_to_packages(req_path)
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

        else:
            print(f"[yellow] Requirements for {module_path} not found.[/yellow]")
