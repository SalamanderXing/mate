
## Experiments

Experiments are written in **restricted python**. Meaning it's python but with some limitations that will keep your mate project tidy. The following statements are not supported in a Mate experiment:

 - loops
 - functions
 - math operations
 - only one if-elif statement is allowed. To check the command sent to the experiment (usually `train` or `test`).

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

### Mate module inside your experiment

In your experiment, you usually want to import the `mate` module, like so:

```
from mate import mate
```

This module contains variables and functions that are useful to run your experiment. For example, the `mate.command` contains the command sent to the experiment (usually `train` or `test`). And `mate.result(...)` allows you to save results of your experiments. Check out [its doc page](./mate.md).

### Organizing your experiments

You should create a new experiment for each different configuration you want to run. For example, if you want to run an experiment with a different learning rate, you should create a new experiment. This will keep your experiments organized and easy to find.

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
