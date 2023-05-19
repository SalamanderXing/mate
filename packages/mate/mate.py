import json
import os
import inspect
from glob import glob
from rich import print
import ipdb


class Mate:
    """
    # Mate Runtime

    Class containing all the information about the current run. You usually want to import it into your experiment like this:

    ```python
    from mate import mate  # instance of Mate, containing all the information about the current run
    ```

    You can use this to:
    - Get the current CLI command
    - Save the run to a JSON file
    - Get the current save directory
    - Get the current checkpoint path

    **Example**

    ```python
    from mate import mate

    if mate.command == "train":
        # do training
    elif mate.command == "test":
        # do testing
    ```
    """

    @staticmethod
    def load():
        get_top_level_cmd = "git rev-parse --show-toplevel"
        top_level = os.popen(get_top_level_cmd).read().strip()
        full_stack = list([o.filename for o in inspect.stack()])
        stack = [al.filename for al in inspect.stack()][-3].split(os.sep)
        runtime = {
            "auto_wandb": False,
            "command": "",
            "save_dir": "",
        }
        if len(stack) > 1:
            cur = stack[-3]
            runtime_filename = os.path.join(top_level, ".mate", cur, "runtime.json")
            if os.path.exists(runtime_filename):
                with open(runtime_filename, "r") as f:
                    runtime = json.load(f)
        return Mate(**runtime)

    def save(self, location: str):
        with open(location, "w") as f:
            json.dump(self.to_dict(), f)

    def to_dict(self):
        result = {
            key: value
            for key, value in self.__dict__.items()
            if not key.startswith("_")
        }
        return result

    def __repr__(self):
        return str(self.to_dict())

    def __str__(self):
        return self.__repr__()

    @property
    def is_train(self) -> bool:
        return self.command == "train"

    @property
    def is_test(self) -> bool:
        return self.command == "test"

    def result(self, values: dict):
        """
        Save the results of the current run.

        **Example**

        ```python
        from mate import mate

        mate.result({"loss": 0.5})
        ```

        This is not meant to replace a proper logging framework,
        but rather to provide a simple way to save the results of an experiment.
        This is especially useful when you want to compare multiple experiments (see `mate.results()`).

        **Pytorch Lightning Example**

        If you want, with pytorch lightning, you can directly pass the `logged_metrics` dictionary to this function.

        ```python
        from mate import mate
        from pytorch_lightning import LightningModule
        from pytorch_lightning import Trainer

        pl_module = # initialize your pytorch lightning module
        trainer = Trainer()

        if mate.is_train:
            trainer.fit(pl_module)
            mate.result(pl_module.logged_metrics)
        ```


        """
        values = {
            k: (v if isinstance(v, (int, float)) else v.item())
            for k, v in values.items()
        }
        os.makedirs(self.save_dir, exist_ok=True)
        result_path = os.path.join(self.save_dir, "result.json")
        result = {}
        if os.path.exists(result_path):
            with open(result_path, "r") as f:
                result = json.load(f)
        result = result | values
        with open(result_path, "w") as f:
            json.dump(result, f)

    def results(self) -> dict[str, dict[str, float]]:
        """
        Get the results of all experiments. in the form of a dictionary.
        The dictionary is structured as follows:

        ```python
        {
            "experiment_name": {
                "metric_name": metric_value
                ...
            }
            ...
        }
        ```

        ```python
        from mate import mate

        results = mate.results()
        # do your analyses and plotting

        ```
        """
        results_files = [
            (os.path.basename(folder), os.path.join(folder, "result.json"))
            for folder in glob(os.path.join(self.__results_folder, "experiments", "*"))
            if os.path.isdir(folder)
            and os.path.exists(os.path.join(folder, "result.json"))
        ]
        results = {}
        for exp_name, result_path in results_files:
            with open(result_path, "r") as f:
                result = json.load(f)
            results[exp_name] = result
        return results

    def tensorboard(self):
        ...

    def wandb(self):
        import wandb

        # print(f"[red] wandb {self.project_name} {self.__experiment_name} [/red]")
        wandb.init(
            project=self.project_name,
            name=self.__experiment_name,
            dir=self.save_dir,
            reinit=True,
        )

    @property
    def experiment_name(self) -> str:
        """
        Get the name of the current experiment.
        """
        return self.__experiment_name

    @property
    def log_dir(self) -> str:
        """
        Get the path to the current log directory.
        """
        logdir = os.path.join(self.save_dir, "logs")
        os.makedirs(logdir, exist_ok=True)
        return logdir

    @property
    def checkpoint_dir(self) -> str:
        """
        Get the path to the current checkpoint directory.
        """
        checkpoint_dir = os.path.join(self.save_dir, "checkpoints")
        os.makedirs(checkpoint_dir, exist_ok=True)
        return checkpoint_dir

    @property
    def default_checkpoint_path(self):
        """
        Get the path to the default checkpoint file.
        """
        return os.path.join(self.checkpoint_dir, "default.ckpt")

    @property
    def data_dir(self) -> str:
        """
        Get the path to the current data directory.
        """
        return os.path.join(self.save_dir, "data")

    def __init__(
        self,
        command: str,
        save_dir: str,
        auto_wandb: bool = False,
        project_name: str = "",
    ):
        self.__results_folder = os.sep.join(save_dir.split(os.sep)[:-2])
        self.command: str = command
        self.save_dir = save_dir
        self.__experiment_name = os.path.basename(save_dir) if save_dir else ""
        self.project_name = (
            project_name  # save_dir.split(os.sep)[-4] if save_dir else ""
        )
        self.auto_wandb = auto_wandb
        if self.auto_wandb:
            self.wandb()
