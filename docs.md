
# 🧉 Maté

### Modularize your deep learning project to improve reproducibility

The following actions work within a mate project folder (where the `mate.json` file is located).

 --- 

```
  init <project_name>
```

**Params**
  - project_name : `str` :  Name of the project



Creates a new mate project in the current folder

---

```
  clone <source_model> <target_model>
```

**Params**
  - source_model : `str` :  Path to the source model
  - target_model : `str` :  Path to the target model


Clones a module

---

```
  create <path> <name>
```

**Params**
  - path : `str` :  Path to the module to create
  - name : `str` :  Name of the module to create


Creates a new module

---

```
  export <source>
```

**Params**
  - source : `str` :  Path to the object to export


Exports a function/class from a module

---

```
  init <project_name>
```

**Params**
  - project_name : `str` :  Name of the project



Creates a new mate project in the current folder

---

```
  install <url>
```

**Params**
  - url : `str` :  URL to the package to install



Installs a module from url

---

```
  remove <target>
```

**Params**
  - target : `str` :  Path to the module to remove



Removes a module

---

```
  rename <path> <name>
```

**Params**
  - path : `str` :  Path to the module to rename
  - name : `str` :  New name of the module


Renames a module.

---

```
  results 
```

**Params**



Prints results

---

```
  show <path>
```

**Params**
  - path : `str` :  Path to the module to show


Shows information about a module or experiment.

---

```
  summary 
```

**Params**



Prints a summary of the mate project.

---

```
  test <experiment_name>
```

**Params**
  - experiment_name : `str` :  Name of the experiment to run


Tests a model

---

```
  train <experiment_name>
```

**Params**
  - experiment_name : `str` :  Name of the experiment to run


Trains a model

---

```
  venv <command>
```

**Params**
  - command : `str` :  Command to run in the virtual environment


Executes inside the python venv

---
