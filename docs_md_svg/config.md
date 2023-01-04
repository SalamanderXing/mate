
# Configuring a Mate Project

`mate.json` is the main configuration file for a Mate project. It defines where the root of a mate project is. The format is JSON.

**Key-value pairs**

- results_folder : `str` : The folder where all results are stored. This is relative to the root **above** the project.
- venv : `bool`=true : Whether to use a virtual environment. If `True` a virtual environment is created in the project root. If `False` no virtual environment is created and the same python as the one used to execute mate will be used instead.

**Example**:

If your `mate.json` lies in `/home/user/project_repo/mate_project/mate.json` and it looks like this:
<p align="center" style="">
    <img src="./imgs/json_92f03bfff01a8870814eedb106c54f10.svg" style="max-width:90%" alt="Your Image">
</p>
Then the results folder will be `/home/user/project_repo/results`