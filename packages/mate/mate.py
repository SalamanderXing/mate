import json
import os
import inspect
from glob import glob
from typing import Any
from rich import print
import sys
import ipdb
import select


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
    def load() -> "Mate | None":
        # get_top_level_cmd = "git rev-parse --show-toplevel"
        # top_level = os.popen(get_top_level_cmd).read().strip()
        # full_stack = list([o.filename for o in inspect.stack()])
        # stack = [al.filename for al in inspect.stack()][-3].split(os.sep)
        # runtime = {
        #     "auto_wandb": False,
        #     "command": "",
        #     "data_dir": "",
        #     "command": "",
        #     "results_dir": "",
        # }
        # if len(stack) > 1:
        #     cur = stack[-3]
        #     runtime_filename = os.path.join(top_level, ".mate", cur, "runtime.json")
        #     if os.path.exists(runtime_filename):
        #         with open(runtime_filename, "r") as f:
        #             runtime = json.load(f)
        # return Mate(**runtime)

        mate = None
        input_data = {}
        print(f"{sys.argv[1:]=}")
        if len(sys.argv) > 1 and sys.argv[1] != "run":
            input_data = {
                a.split("=")[0]: a.split("=")[1] for a in sys.argv[1:] if "=" in a
            }
        if len(input_data) > 0:
            try:
                mate = Mate(**input_data)
            except TypeError as e:
                if "got an unexpected keyword argument" in str(e) or "missing" in str(
                    e
                ):
                    pass
                else:
                    raise e
        return mate

    def save(self, location: str):
        with open(location, "w") as f:
            json.dump(self.to_dict(), f)

    def json(self) -> str:
        """
        Get the minified JSON representation of the current Mate instance.
        """
        return json.dumps(self.to_dict(), separators=(",", ":"))

    def to_cli(self) -> str:
        """
        Get the CLI command that was used to run the current experiment.
        """
        return " ".join(f"{k}={v}" for k, v in self.to_dict().items())

    def json_base64(self) -> str:
        """
        Get the base64 encoded JSON representation of the current Mate instance.
        """
        import base64

        return base64.b64encode(self.json().encode("utf-8")).decode("utf-8")

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
        os.makedirs(self.results_dir, exist_ok=True)
        result_path = os.path.join(self.results_dir, "result.json")
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
            dir=self.results_dir,
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
        logdir = os.path.join(self.results_dir, "logs")
        os.makedirs(logdir, exist_ok=True)
        return logdir

    @property
    def checkpoint_dir(self) -> str:
        """
        Get the path to the current checkpoint directory.
        """
        checkpoint_dir = os.path.join(self.results_dir, "checkpoints")
        os.makedirs(checkpoint_dir, exist_ok=True)
        return checkpoint_dir

    @property
    def default_checkpoint_path(self):
        """
        Get the path to the default checkpoint file.
        """
        return os.path.join(self.checkpoint_dir, "default.ckpt")

    @property
    def plots_dir(self) -> str:
        """
        Get the path to the current plots directory.
        """
        plots_dir = os.path.join(self.results_dir, "plots")
        os.makedirs(plots_dir, exist_ok=True)
        return plots_dir

    def bind(self, obj: Any):
        """
        Bind an object to the current Mate instance.
        It will automatically call the method specified by the `command` attribute.
        """
        try:
            getattr(obj, self.command)()
        except Exception as e:
            if self.auto_wandb:
                import wandb

                wandb.finish()
            raise e

    def __init__(
        self,
        command: str,
        data_dir: str,
        results_dir: str,
        auto_wandb: bool = False,
        project_name: str = "",
        **hyperparameters: dict[str, Any],
    ):
        self.data_dir = data_dir
        self.__results_folder = os.sep.join(results_dir.split(os.sep)[:-2])
        self.command: str = command
        self.results_dir = results_dir
        self.__experiment_name = os.path.basename(results_dir) if results_dir else ""
        self.project_name = (
            project_name  # save_dir.split(os.sep)[-4] if save_dir else ""
        )
        self.auto_wandb = auto_wandb
        for key, value in hyperparameters.items():
            assert not hasattr(
                self, key
            ), f"Duplicate hyperparameter: {key}. Please use a different name because it is already used by Mate."
            setattr(self, key, value)
        if self.auto_wandb:
            self.wandb()
