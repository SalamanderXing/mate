import os
import sys
import json
import glob
from .mate_config import MateConfig
from .runtime import MateRuntime
from .git_manager import GitManager

# from .data.package_repository import PackageRepository
from rich import print
from rich.tree import Tree
from rich.text import Text
from rich.table import Table
import ipdb
from . import io
from .mate_project import MateProject, colors, Python
import glob


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
    def init(project_name: str):
        assert not os.path.exists(project_name), "Project directory exists"
        if os.path.exists(".mate"):
            os.system("rm -rf .mate")
            os.makedirs(".mate")
        os.system(
            f"git clone https://github.com/ilex-paraguariensis/deeplearning-project-template .mate"  # FIXME
        )
        os.system(f"mv {os.path.join('.mate', 'my-project')} {project_name}")
        os.system(f"rm -rf .mate")

    def __setup(self, root: str):
        get_top_level_cmd = "git rev-parse --show-toplevel"
        # gets the ouptut of the command
        top_level = os.popen(get_top_level_cmd).read().strip()
        if not os.path.exists(".gitingore"):
            os.system("touch .gitignore")
        with open(".gitignore") as f:
            gitignore = f.read()
        if "*/venv/" not in gitignore:
            with open(".gitignore", "a") as f:
                f.write("*/venv/")
        if "*/.matemodule/" not in gitignore:
            with open(".gitignore", "a") as f:
                f.write("*/.matemodule/")
        mate_dir = os.path.join(top_level, ".mate")
        project_name = os.path.basename(root)
        self.mate_dir = os.path.join(mate_dir, project_name)
        self.python = Python(self.mate_dir)
        self.project = MateProject(root, self.python)
        self.tmp_dir = os.path.join(self.mate_dir, "tmp")
        if not os.path.exists(self.mate_dir):
            os.makedirs(self.mate_dir)
            print(f"Created {self.mate_dir}")
        readme_path = os.path.join(top_level, "README.md")
        if not os.path.exists(readme_path):
            os.system(f"touch {readme_path}")
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
            orig_summary = old_summary_json[self.project.name].copy()
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

        leafs = self.project.leaf_modules()
        for leaf in leafs:
            if not os.path.exists(os.path.join(leaf.root_dir, "requirements.txt")):
                self.python.generate_requirements_single(leaf.root_dir)

    def __get_results_dict(self):

        results_folders = [
            folder
            for folder in glob.glob(os.path.join(self.config.results_folder, "*"))
            if os.path.isdir(folder)
        ]
        all_results = {}
        for folder in results_folders:
            results = glob.glob(os.path.join(folder, "result.json"))
            experiment_name = folder.split(os.sep)[-1]
            if len(results) > 0:
                with open(results[0], "r") as f:
                    all_results[experiment_name] = dict(
                        **json.load(f), **{"experiment": experiment_name}
                    )
        return all_results

    def venv(self, command: str):
        # activate the virtual environment
        #self.python.venv(command)
        self.python(command)

    def to_tree(self) -> Tree:
        vals = self.project.to_dict()["project"]
        # turns this nested dict into a rich tree
        tree = Tree(
            Text("🧉 ") + Text(self.project.name, "underline"), style="bold #32CD30"
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

    def instreqs(self):
        self.python.install_requirements()

    def get_json_summary(self):
        return self.project.to_dict()

    def deps(self):
        self.python.generate_requirements()

    def show(self, path: str):
        node = self.project[path]
        tree = node.to_tree()
        print(tree)
        if len(node.errors) > 0:
            print(f"[{colors.error} bold]ERRORS:[/{colors.error} bold]")
            for e in node.errors:
                print(f"    [{colors.error}]❌[/{colors.error}][yellow]{e}[/yellow]")

    def export(self, source: str):
        assert isinstance(source, str), "Source must be a string"
        assert "." in source, "Source must be a path"
        module_root = os.path.join(
            self.project.__name, os.sep.join(source.split(".")[:2])
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
                console.print(
                    f"  ✅ [green]Exported {to_export} from {source} to {target_file}[/green], ('{import_statement}')"
                )
            else:
                print(f"{to_export} already exported, skipping.")

    def results(self):

        results_folders = [
            folder
            for folder in glob.glob(os.path.join(self.config.results_folder, "*"))
            if os.path.isdir(folder)
        ]
        all_results = []
        for folder in results_folders:
            experiment = folder.split(os.sep)[-1]
            if experiment in self.project["experiments"]:
                results = glob.glob(os.path.join(folder, "result.json"))
                if len(results) > 0:
                    with open(results[0], "r") as f:
                        written_results = {
                            k: round(v, 3) if isinstance(v, (int, float)) else v
                            for k, v in json.load(f).items()
                        }
                    all_results.append(written_results | {"experiment": experiment})
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
                        title=self.project.experiments[experiment].data_loader,
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

    def create(self, path: str, name: str):
        self.project.create(path, name)

    def train(self, experiment_name: str = "default"):
        assert (
            experiment_name in self.project.experiments
        ), f"Experiment:{experiment_name} not found"
        save_dir = os.path.join(self.config.results_folder, experiment_name)
        checkpoint_path = os.path.join(save_dir, "checkpoints")
        if not os.path.exists(checkpoint_path):
            os.makedirs(checkpoint_path)
        runtime = MateRuntime(
            command="train",
            save_dir=save_dir,
            checkpoint_path=checkpoint_path,
            runtime_save_path=os.path.join(self.mate_dir, "runtime.json"),
        )
        runtime.save()
        if self.config.verbose:
            print(runtime)
        os.system(f"python -m {self.project.experiments[experiment_name]}")

    def clone(self, source: str, destination: str):
        self.project.clone(source, destination)

    def restart(self):
        pass

    def test(self, experiment_name: str):
        assert (
            experiment_name in self.project.experiments
        ), f"Experiment:{experiment_name} not found"
        save_dir = os.path.join(self.config.results_folder, experiment_name)
        checkpoint_path = os.path.join(save_dir, "checkpoints")
        if not os.path.exists(checkpoint_path):
            os.makedirs(checkpoint_path)
        runtime = MateRuntime(
            command="test",
            save_dir=save_dir,
            checkpoint_path=checkpoint_path,
            runtime_save_path=os.path.join(self.mate_dir, "runtime.json"),
        )
        runtime.save()
        if self.config.verbose:
            print(runtime)
        os.system(f"python -m {self.project.experiments[experiment_name]}")

    def sample(self):
        # TODO, this should be in the trainer if its a generative model
        pass

    def remove(self, target: str):
        self.project.remove(target)
