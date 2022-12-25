import json
import os
import shutil
import sys
from typing import Optional
import ipdb
from .mate_config import MateConfig
from .utils.utils import once
from typing import Any


def set_save_path(root_save_folder: str, root_folder: str, params: str):
    save_path = os.path.join(root_save_folder, root_folder, params)

    return save_path


def save_train_experiments(save_path, hparams: dict, conf: MateConfig):
    params = hparams.copy()
    params["mate"] = conf.copy()
    with open(os.path.join(save_path, "train.json"), "w") as f:
        json.dump(params, f, indent=4)


def get_metadata_path(root_folder: str, experiment: str):
    path = os.path.join(root_folder, "experiments", experiment, "metadata.json")
    # os.makedirs(os.path.dirname(path), exist_ok=True)
    return path


def save_metadata(root_folder: str, experiment: str, metadata: dict):
    path = get_metadata_path(root_folder, experiment)
    with open(path, "w") as f:
        json.dump(metadata, f, indent=4)


def save_toml(root_folder: str, experiment: str, toml: str):
    path = os.path.join(root_folder, "experiments", experiment, "experiment.toml")
    with open(path, "w") as f:
        f.write(toml)


def get_experiment_base_module(root_folder: str, model_name: str, experiment: str):

    if experiment == "default":
        # firt check if second level default exists
        if os.path.exists(
            os.path.join(
                root_folder, "models", model_name, "experiments", "default.json"
            )
        ):
            return ".".join([root_folder, "models", model_name])

        else:
            path = os.path.join(root_folder, "experiments", f"{model_name}.json")
            if os.path.exists(path):
                return root_folder

    # if not, check if first level default exists
    # ipdb.set_trace()
    module = ".".join([root_folder, "models", model_name])

    return module


print_once = once(print)


def apply_env(root_folder: str, hparams: dict):
    env_location = os.path.join(
        root_folder,
        "env.json",
    )
    if not os.path.exists(env_location):
        print(f"Could not find env.json in {env_location}. Created one.")
        with open(env_location, "w") as f:
            json.dump({}, f)

    with open(env_location) as f:
        env = json.load(f)

    env_in_params = [
        (key, val) for key, val in hparams.items() if key.startswith("env.")
    ]
    modified_env = False
    for key, val in env_in_params:
        stripped_key = key[4:]
        if key not in env:
            env[stripped_key] = val
            modified_env = True
        hparams[stripped_key] = env[stripped_key]
        hparams.pop(key, None)

    if modified_env:
        with open(env_location, "w") as f:
            json.dump(env, f, indent=4)
        print("Updated env.json")
        # print(json.dumps(env, indent=4))


def find_root() -> tuple:
    """
    Method in charge of finding the root folder of the project and reading the content of mate.json
    """
    # path of execution
    current_path = os.getcwd()
    found = False
    i = 0
    root_folder = ""
    config: Optional[MateConfig] = None
    while not found:

        if os.path.exists(os.path.join(current_path, "mate.json")):
            conf_path = os.path.join(current_path, "mate.json")
            config = MateConfig(conf_path)
            assert config is not None, f"Error initializing mate config {conf_path}"
            root_folder = current_path
            found = True
            os.chdir("..")
        else:
            os.chdir("..")
            current_path = os.getcwd()
            i += 1
            if current_path == "/" or i == 6:
                raise Exception(
                    "Could not find mate.json. Please make sure you are in the root folder of the project."
                )
    sys.path.insert(0, os.getcwd())
    assert config is not None
    return root_folder, config


def clone(root_folder: str, source_model: str, target_model: str):
    shutil.copytree(
        os.path.join(root_folder, "models", source_model),
        os.path.join(root_folder, "models", target_model),
    )


def snapshot(root_folder: str, model_name: str):

    if not os.path.exists(os.path.join(root_folder, "snapshots")):
        os.makedirs(os.path.join(root_folder, "snapshots"))

    snapshot_names = [
        name.split("__") for name in os.listdir(os.path.join(root_folder, "snapshots"))
    ]
    matching_snapshots = [name for name in snapshot_names if name[0] == model_name]
    max_version_matching = (
        max([int(name[1]) for name in matching_snapshots])
        if len(matching_snapshots) > 0
        else 0
    )
    snapshot_name = f"{model_name}__{max_version_matching + 1}"

    shutil.copytree(
        os.path.join(root_folder, "models", model_name),
        os.path.join(root_folder, "snapshots", snapshot_name),
    )
    print(f"Created snapshot {snapshot_name}")
