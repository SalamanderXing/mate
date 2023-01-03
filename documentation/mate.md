# 🧉 Maté


The root of a mate project is where you can find the 'mate.json`. Mate will generate this file for you when you do `mate init`.

--- 

## Cli Parser

Mate's CLI parser parses the command line arguments and calls the appropriate method on the Mate class.

Notice that for boolean arguments, you can use either false or False, true or True. And for None you can use either null or None.

**Example**

```
mate init my_project venv=false
```

## File structure of a mate project

The file structure of a mate project is just a collection of nested python modules (a folder is a python module if it contains a `__init__.py` file, which may be empty). When you do a `mate init` you'll automatically generate a simple mate folder structure.

Typically, a file structure will look something like this:

<p align="center" style="margin:0; padding:0;">
  <img src="./imgs/output.svg" alt="Your Image" style="width: 30%; height:200; object-fit:cover; margin-left:10px; margin-top:0, border-radius:50%;">
</p>

And this is how the `mate summary` command displays it:

<p align="center" style="margin:0; padding:0;">
  <img src="./imgs/summary.svg" alt="Your Image" style="width: 30%; height:200; object-fit:cover; margin-left:10px; margin-top:0, border-radius:50%;">
</p>

To a mate project, the following rules apply:

- all the `README.md` files are optional but, if present, will be used by the `mate show` command to display a module (with its submodules).
- In each python module, you may only have the following:
- an`__init__.py`
- a readme
- other submodules
No other files/folders are allowed. Inside the leaf modules, on the other hand (ex `models/ae`), everything is permitted except for the following rule.
- Each submodule inside a root module (ex `models/ae`) may not import from other submodules in the mate project, i.e., it has to be isolated.
- Different rules apply to the experiment's files (ex `experiments/ae_cifar.py`). See the experiments section below.

## Experiments

Experiments are written in **restricted python**. Meaning it's python but with some limitations that will keep your mate project tidy. The following statements are not supported in a Mate experiment:

 loops
 functions
math operations
only one if-elif statement is allowed. To check the command sent to the experiment (usually `train` or `test`).

### Imports
You should only import from the root of a module.

For example, this is not a valid import:
```python
from ..models.ae.ae import AE
```
And this is instead valid:
```python
from ..models.ae import AE
```

### Why these rules?

A mate experiment, although a subset of python, is just a configuration file where you should put all your hyperparameters. It's meant to be where you import all your modules and organize them together to run your experiment. Defining loops and functions here would imply that you can skip organizing your project into modules and do everything in this file, thus losing all the attractive properties you get from modularity.

If you're tempted to write functions or loops, maybe you should create a new module.

Below you can find an example of a valid mate experiment:


```python
from mate import mate
from ..models.linear import Net
from ..trainers.trainer import MNISTModel
from ..data_loaders.mnist import MNISTDataModule
from pytorch_lightning import Trainer
from pytorch_lightning.callbacks.progress import TQDMProgressBar
import torch


# Init our model
mnist_model = MNISTModel(Net())

data_module = MNISTDataModule()

# Initialize a trainer
trainer = Trainer(
    accelerator="auto",
    devices=1 if torch.cuda.is_available() else None,  # limiting got iPython runs
    max_epochs=1,
    callbacks=[TQDMProgressBar(refresh_rate=20)],
)
if mate.is_train:
    # Train the model ⚡
    trainer.fit(mnist_model, data_module)
    mate.result(trainer.logged_metrics)
```




