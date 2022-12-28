# from .api.data.metadata.metadata import BaseMetadata, Metadata
from enum import Enum
import json
from typing import Union, Optional


class Config:
    def __init__(self, config: Union[dict, str, None] = None):
        if isinstance(config, str):
            try:
                with open(config, "r") as f:
                    config = json.load(f)
            except Exception as e:
                print(f"Could not parse config: {config}")
                raise e
        elif config is None:
            config = {}
        assert isinstance(config, dict)
        for key, annotation in self.__class__.__annotations__.items():
            # if value is not None and value != {} and value != False:
            if hasattr(annotation, "__args__"):
                if not type(None) in annotation.__args__:
                    assert key in config, f"Missing key:'{key}' in config"
                if key in config:
                    assert isinstance(
                        config[key], annotation.__args__
                    ), f"Wrong type for key '{key}' should be in {(v.__name__ for v in annotation.__args__)} but is {type(config[key]).__name__}"
                    setattr(self, key, config[key])
            elif key in config:
                assert isinstance(
                    config[key], annotation
                ), f"Wrong type for key '{key}', should be {annotation.__name__}"
                setattr(self, key, config[key])

        for key in config.keys():
            assert key in self.__dict__.keys(), f"Unknown key {key} in config."

    def __str__(self):
        return json.dumps(
            {key: val for key, val in self.__dict__.items()},
            indent=4,
        )

    def __repr__(self):
        return self.__str__()

    def json(self):
        return {
            key: (val if not isinstance(val, Enum) else str(val))
            for key, val in self.__dict__.items()
        }

    def copy(self):
        return self.json().copy()

    # add mate["item"] = "value" functionality
    def __setitem__(self, key, value):
        setattr(self, key, value)

    # add mate["item"] functionality
    def __getitem__(self, key):
        return getattr(self, key)


class MateConfig(Config):
    """
    ```
    mate.json
    ```
    This is the main configuration file for a Mate project. It defines where the root of a mate project is. The format is JSON.

    ### Key-value pairs:

    - `results_folder`: The folder where all results are stored. This is relative to the root **above** the project.

    **Example**:

    If your `mate.json` lies in `/home/user/project_repo/mate_project/mate.json` and it looks like this:
    ```json
    {
        "results_folder": "results"
    }
    ```
    Then the results folder will be `/home/user/project_repo/results`
    """

    venv: Optional[bool] = None
    verbose: Optional[bool] = None
    results_folder: str = ""

    def __init__(self, config):
        super().__init__(config)

    def __str__(self):
        return "MateConfig:" + super().__str__()

    def __repr__(self):
        return self.__str__()

    def save(self, path="mate.json"):

        with open(path, "w") as f:
            f.write(self.__str__())
