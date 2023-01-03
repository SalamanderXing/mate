
--- 

```
mate clone <source_model> <target_model>
```

**Params**
- source_model : `str` :  Path to the source model
- target_model : `str` :  Path to the target model


Clones a module

---

```
mate create <path> <name>
```

**Params**
- path : `str` :  Path to the module to create
- name : `str` :  Name of the module to create


Creates a new module

---

```
mate export <source>
```

**Params**
- source : `str` :  Path to the object to export


Exports a function/class from a module

---

```
mate init <project_name> <params>
```

**Params**
- project_name : `str` :  Name of the project
- params : `str` :  Parameters to pass to the project. These are the same key-value pairs that are in the `mate.json` file (check out that section).



Creates a new mate project in the current folder.

**Example**

```
mate init my_fancy_project venv=false
```

---

```
mate install <url>
```

**Params**
- url : `str` :  URL to the package to install


Installs a module from url. The URL must be a git repository and point to the full path of the module.


---

```
mate md 
```

**Params**



Prints the markdown documentation of the project

---

```
mate pip <commands>
```

**Params**
- commands : `str` : 


Executes inside the python venv

```
mate pip install numpy
```

---

```
mate remove <target>
```

**Params**
- target : `str` :  Path to the module to remove



Removes a module

---

```
mate rename <path> <name>
```

**Params**
- path : `str` :  Path to the module to rename
- name : `str` :  New name of the module



Renames a module.

---

```
mate results 
```

**Params**



Prints results

---

```
mate run <experiment_name> <command>
```

**Params**
- experiment_name : `str` :  Name of the experiment to run
- command : `str` :  Command to run



Runs an experiment with the given command

---

```
mate show <path>
```

**Params**
- path : `str` :  Path to the module to show


Shows information about a module or experiment.

---

```
mate summary 
```

**Params**



Prints a summary of the mate project.

---

```
mate venv <command>
```

**Params**
- command : `str` :  Command to run in the virtual environment


Executes inside the python venv

---

### Configuring a mate project

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