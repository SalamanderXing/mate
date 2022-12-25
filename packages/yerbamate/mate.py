import os
from .mate_api import MateAPI
from typing import Optional
from rich import print


class Mate:
    """
    # 🧉 Maté

    ### Modularize your deep learning project to improve reproducibility

    The following actions work within a mate project folder (where the `mate.json` file is located).
    """

    def __init__(self):
        """
        Initializes mate
        """
        self.current_folder = os.path.dirname(__file__)
        self.api = MateAPI()
        # self.models = self.__list_packages("models")
        self.is_restart = False
        self.run_params = None

    @staticmethod
    def init(project_name: str):
        """
        :param project_name: Name of the project

        Creates a new mate project in the current folder
        """
        MateAPI.init(project_name)

    def remove(self, target: str):
        """
        :param target: Path to the module to remove

        Removes a module
        """
        self.api.remove(target)

    def show(self, path: str):
        """
        :param path: Path to the module to show
        Shows information about a module or experiment.
        """
        self.api.show(path)

    def venv(self, command: str):
        """
        :param command: Command to run in the virtual environment
        Executes inside the python venv
        """
        self.api.venv(command)

    def summary(self):
        """
        Prints a summary of the mate project.
        """
        print(self.api.to_tree())

    def results(self):
        """
        Prints results
        """
        results_table = self.api.results()
        if results_table is not None:
            print(results_table)
        else:
            print("No results found.")

    def clone(self, source_model: str, target_model: str):
        """
        :param source_model: Path to the source model
        :param target_model: Path to the target model
        Clones a module
        """
        self.api.clone(source_model, target_model)

    def create(self, path: str, name: str):
        """
        :param path: Path to the module to create
        :param name: Name of the module to create
        Creates a new module
        """
        self.api.create(path, name)

    def train(self, experiment_name: str):
        """
        :param experiment_name: Name of the experiment to run
        Trains a model
        """
        self.api.train(experiment_name=experiment_name)

    def rename(self, path: str, name: str):
        """
        :param path: Path to the module to rename
        :param name: New name of the module
        Renames a module.
        """
        self.api.rename(path, name)

    def export(self, source: str):
        """
        :param source: Path to the object to export
        Exports a function/class from a module
        """
        self.api.export(source)

    def test(self, experiment_name: str):
        """
        :param experiment_name: Name of the experiment to run
        Tests a model
        """
        self.api.test(experiment_name)

    def install(self, url: str):
        """
        :param url: URL to the package to install

        Installs a module from url
        """
        self.api.install(url)
