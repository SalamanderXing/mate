

# Configuring a Mate Project

`mate.json` is the main configuration file for a Mate project. It defines where the root of a mate project is. The format is JSON.

**Key-value pairs**

- results_folder : `str` : The folder where all results are stored. This is relative to the root **above** the project.
- venv : `bool`=true : Whether to use a virtual environment. If `True` a virtual environment is created in the project root. If `False` no virtual environment is created and the same python as the one used to execute mate will be used instead.

**Example**:

If your `mate.json` lies in `/home/user/project_repo/mate_project/mate.json` and it looks like this:
```json
{
    "results_folder": "results"
    "venv":true
}
```
Then the results folder will be `/home/user/project_repo/results`