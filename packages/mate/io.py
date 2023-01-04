import os
import sys
from typing import Optional
import ipdb
from .mate_config import MateConfig
from typing import Any

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
