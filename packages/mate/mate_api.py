import os
import sys
import json
import ipdb
import glob
from typing import Optional
from .utils import print_markdown, print, rmwithin
from .mate_config import MateConfig
from .mate import Mate
from .git_manager import GitManager

# from .data.package_repository import PackageRepository
from rich.tree import Tree
from rich.text import Text
from rich.table import Table
from . import io
import os
from .mate_project import MateProject, colors, Python, Experiment
from glob import glob
import shutil


class MateAPI:
    def __init__(self):
        root, config = io.find_root()
        self.config: MateConfig = config
        self.mate_dir: str = ""  # will be mutated by __setup
        self.tmp_dir: str = ""
        self.__setup(root)
        if not os.path.exists(self.mate_dir):
            os.makedirs(".mate")

        if self.config.verbose:
            print(self.config)

    @staticmethod
    def init(project_name: str, params: dict[str, str]):
        assert not os.path.exists(project_name), "Project directory exists"
        tmp_dir = os.path.join(".mate", "tmp")
        if os.path.exists(tmp_dir):
            rmwithin(tmp_dir)
        else:
            os.makedirs(tmp_dir)
        os.system(
            f"git clone https://github.com/salamanderxing/deeplearning-mate-project-template {tmp_dir}"
        )
        shutil.move(os.path.join(tmp_dir, "my_project"), project_name)
        # os.system(f"rm -rf {os.path.join('.mate', '*')}")
        rmwithin(tmp_dir)
        mate_config = os.path.join(project_name, "mate.json")
        with open(mate_config, "r") as f:
            config = json.load(f)
        config = config | params
        with open(mate_config, "w") as f:
            json.dump(config, f, indent=4)

    def __add_to_gitignore(self, gitignore_path, values: list[str]):
        if not os.path.exists(gitignore_path):
            os.system("touch .gitignore")
        with open(".gitignore") as f:
            gitignore = f.read()

        for value in values:
            value += "\n"
            if value not in gitignore:
                with open(".gitignore", "a") as f:
                    f.write(value)

    def __setup(self, root: str):
        os.makedirs(
            os.path.join(self.config.results_folder, "experiments"), exist_ok=True
        )
        os.makedirs(os.path.join(self.config.results_folder, "analyses"), exist_ok=True)
        get_top_level_cmd = "git rev-parse --show-toplevel"
        # gets the ouptut of the command
        top_level = os.popen(get_top_level_cmd).read().strip()
        gitignore_path = os.path.join(top_level, ".gitignore")
        values = [
            os.path.join(".mate", "*", "venv"),
            os.path.join(".mate", "tmp"),
        ]
        self.__add_to_gitignore(gitignore_path, values)
        mate_dir = os.path.join(top_level, ".mate")
        project_name = os.path.basename(root)
        self.mate_dir = os.path.join(mate_dir, project_name)
        self.python = Python(
            self.mate_dir,
            venv=self.config.venv if not (self.config.venv is None) else True,
        )
        self.project = MateProject(root, self.python)
        self.tmp_dir = os.path.join(self.mate_dir, "tmp")
        if not os.path.exists(self.mate_dir):
            os.makedirs(self.mate_dir)
            print(f"Created {self.mate_dir}")
        readme_path = os.path.join(top_level, "README.md")
        if not os.path.exists(readme_path):
            with open(readme_path, "w") as f:
                f.write("")
            print("Created README.md")
        # reads the readme and checks if it contains the word builtwithmate. If not, it adds it
        with open(readme_path, "r") as f:
            readme = f.read()
            if "builtwithmate" not in readme:
                readme += "### builtwithmate"
                with open(readme_path, "w") as f:
                    f.write(readme)
                    print("Added builtwithmate to README.md")

        summary_json_location = os.path.join(mate_dir, "projects.json")
        project_dict = self.project.to_dict()
        project_dict["root"] = self.project.root_dir.replace(top_level, "")
        if os.path.exists(summary_json_location):
            with open(summary_json_location, "r") as f:
                old_summary_json = json.load(f)
            if (self.project.name not in old_summary_json) or (
                project_dict != old_summary_json[self.project.name]
            ):
                old_summary_json[self.project.name] = project_dict
                with open(summary_json_location, "w") as f:
                    json.dump(old_summary_json, f, indent=4)
                print('Updated "projects.json"')
        else:
            with open(summary_json_location, "w") as f:
                json.dump({self.project.name: project_dict}, f, indent=4)

            print(f"Created {summary_json_location}")

    def __get_results_dict(self):

        results_folders = [
            folder
            for folder in glob(os.path.join(self.config.results_folder, "*"))
            if os.path.isdir(folder)
        ]
        all_results = {}
        for folder in results_folders:
            results = glob(os.path.join(folder, "result.json"))
            experiment_name = folder.split(os.sep)[-1]
            if len(results) > 0:
                with open(results[0], "r") as f:
                    all_results[experiment_name] = dict(
                        **json.load(f), **{"experiment": experiment_name}
                    )
        return all_results

    def venv(self, command: str):
        # activate the virtual environment
        # self.python.venv(command)
        self.python(command)

    def to_markdown(self):
        pass

    def pip(self, *commands: str):
        self.python.pip(" ".join(commands))

    def to_tree(self) -> Tree:
        vals = self.project.to_dict()["project"]
        # turns this nested dict into a rich tree
        tree = Tree(
            Text("🧉 ")
            + Text(self.project.name, "underline #32CD30")
            + Text(f" 🐍{self.python.version}", "grey"),
            style="bold",
        )

        results = self.__get_results_dict()
        for k, v in vals.items():
            # add a node for the key using the funciton .add() removes the underline style
            # and adds the matching color
            node = tree.add(k, style=f"bold {colors[k]}")
            for k2, e in v.items():
                text = Text("")
                if len(e["errors"]) > 0:
                    text += Text(f"❌", f"bold {colors.error}")
                else:
                    text += Text(f"☑ ", "bold #00FF00")
                if k == "experiments":
                    if k2 in results:
                        # text += Text("📊 ")
                        text += Text("💪")
                text += Text(k2)
                node.add(text)

        return tree

    def get_json_summary(self):
        return self.project.to_dict()

    def show(self, path: str):
        node = self.project[path]
        # tree = node.to_tree()
        print_markdown(node.show())

    def inspect(self, path: str):
        node = self.project[path]
        if len(node.errors) > 0:
            print(f"[{colors.error} bold]ERRORS:[/{colors.error} bold]")
            for e in node.errors:
                print(f" [{colors.error}]❌[/{colors.error}] [yellow]{e}[/yellow]")

        if isinstance(node, Experiment):
            if len(node.imports) > 0:
                tree = Tree(f"[pink bold]{node.name}[/pink bold]")
                for k, v in node.imports_dict.items():
                    sub = tree.add(k)
                    for name, val in v.items():
                        sub.add(f"{name} : {','.join([i.names[0].name for i in val])}")
                print(tree)

            print(f"[green bold]RESULTS:[/green bold]")
            results = self.__get_results_dict()
            if node.name in results:
                result = results[node.name]
                for k, v in result.items():
                    if k != "experiment":
                        print(f" - {k}: {round(v, 3)}")
        elif len(node.exports) > 0:
            print(f"[green bold]EXPORTS:[/green bold]")
            for export in node.exports.values():
                print(" - ", export.names[0].name)

    def export(self, source: str):
        assert isinstance(source, str), "Source must be a string"
        assert "." in source, "Source must be a path"
        module_root = os.path.join(
            self.project.name, os.sep.join(source.split(".")[:2])
        )
        assert os.path.exists(
            module_root
        ), f"Module {module_root.replace(os.sep, '.')} does not exist"
        target_file = os.path.join(module_root, "__init__.py")
        relative_path = ".".join(source.split(".")[2:-1])
        to_export = source.split(".")[-1]
        import_statement = f"from .{relative_path} import {to_export}\n"
        # checks that the import statement is not already in the file
        with open(target_file, "r") as f:
            if import_statement not in f.read():
                with open(target_file, "a") as f:
                    f.write(import_statement)
                print(
                    f"  ✅ [green]Exported {to_export} from {source} to {target_file}[/green], ('{import_statement}')"
                )
            else:
                print(f"{to_export} already exported, skipping.")

    def results(self):

        results_folders = [
            folder
            for folder in glob(os.path.join(self.config.results_folder, "*"))
            if os.path.isdir(folder)
        ]
        all_results = []
        for folder in results_folders:
            experiment_name = folder.split(os.sep)[-1]
            if experiment_name in self.project["experiments"]:
                experiment = self.project["experiments"][experiment_name]
                results = glob(os.path.join(folder, "result.json"))
                if len(results) > 0:
                    with open(results[0], "r") as f:
                        written_results = {
                            k: round(v, 3) if isinstance(v, (int, float)) else v
                            for k, v in json.load(f).items()
                        }
                    all_results.append(
                        written_results
                        | {
                            "experiment": experiment.name,
                            "data_loader": experiment.data_loader,
                        }
                    )
                # collect all the keys contained in all_results dictionaries
                keys = set()
                for result in all_results:
                    keys.update(result.keys())
                keys = list(keys)
                if len(keys) > 0:
                    keys.remove("experiment")
                    keys = ["experiment"] + keys
                    # create a table with the keys as columns
                    table = []
                    for result in all_results:
                        row = []
                        for key in keys:
                            row.append(result.get(key, ""))
                        table.append(row)
                    t = Table(
                        title=self.project.experiments[experiment_name].data_loader,
                        show_header=True,
                        header_style="bold #00FF00",
                    )
                    for key in keys:
                        t.add_column(key)
                    for row in table:
                        t.add_row(*[str(x) for x in row])
                    return t

    def rename(self, target: str, destination: str):
        self.project.rename(target, destination)

    def install(self, url: str):
        git = GitManager.from_url(self.project.name, url)
        installed_location = git.clone(os.path.join(self.mate_dir, "tmp"))
        self.python.install_module_requirements(installed_location)

    def create(self, path: str):
        self.project.create(path)

    """
    def check_for_errors(self, experiment:Experiment):
        ## checks not only for errors in the experiment, but also in the modules it imports
        errors = []
        for module in experiment.imports:
            errors += self.check_for_errors(self.project["modules"][module])
        errors += experiment.errors
        return errors
    """

    def run(self, target: str, command: Optional[str]):
        if "." in target:
            path, name = target.split(".")
            assert not (path == "analyses" and command is not None), (
                "Analyses do not have commands, "
                "you can only run them with the 'mate run' command"
            )
        else:
            path = "experiments"  # by default runs experiments
            name = target
        assert path in self.project, f"Path '{path}' does not exist"
        assert name in self.project[path], f"Name {path}.{name} does not exist"
        save_dir = os.path.join(self.config.results_folder, path, name)
        checkpoint_path = os.path.join(
            self.config.results_folder, "experiments", "checkpoints"
        )

        if not os.path.exists(checkpoint_path):
            os.makedirs(checkpoint_path)
        runtime = Mate(
            command=command if command is not None else "",
            save_dir=save_dir,
            checkpoint_path=checkpoint_path,
        )
        runtime.save(os.path.join(self.mate_dir, "runtime.json"))
        if self.config.verbose:
            print(runtime)
        # self.python("-m {self.project.experiments[experiment_name].module_path}")
        exp_path = self.project[f"{path}.{name}"].module_path
        exit_code = self.python(f"-m {exp_path}")
        if exit_code != 0:
            print(
                f" [red]❌ Experiment {path}.{name} failed with exit code {exit_code} [/red]"
            )
        else:
            print(f"  ✅ [green]Experiment {target} finished[/green]")

    def clone(self, source: str, destination: str):
        self.project.clone(source, destination)

    def sample(self):
        # TODO, this should be in the trainer if its a generative model
        pass

    def remove(self, target: str):
        self.project.remove(target)
