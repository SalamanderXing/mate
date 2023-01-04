
## Experiments

Experiments are written in **restricted python**. Meaning it's python but with some limitations that will keep your mate project tidy. The following statements are not supported in a Mate experiment:

 - loops
 - functions
 - math operations
 - only one if-elif statement is allowed. To check the command sent to the experiment (usually `train` or `test`).

### Imports
You should only import from the root of a module.

For example, this is not a valid import:
<p align="center" style="">
    <img src="./imgs/python_781fb6a012170781ee7755615a617313.svg" style="max-width:90%" alt="Your Image">
</p>

And this is instead valid:

<p align="center" style="">
    <img src="./imgs/python_d80cc51c2ccb5bf9ede99aeb7ce63170.svg" style="max-width:90%" alt="Your Image">
</p>

### Why these rules?

A mate experiment, although a subset of python, is just a configuration file where you should put all your hyperparameters. It's meant to be where you import all your modules and organize them together to run your experiment. Defining loops and functions here would imply that you can skip organizing your project into modules and do everything in this file, thus losing all the attractive properties you get from modularity.

If you're tempted to write functions or loops, maybe you should create a new module.

### Mate module inside your experiment

In your experiment, you usually want to import the `mate` module, like so:

<p align="center" style="">
    <img src="./imgs/None_c9495276ed784543b08b104ee0fb2510.svg" style="max-width:90%" alt="Your Image">
</p>

This module contains variables and functions that are useful to run your experiment. For example, the `mate.command` contains the command sent to the experiment (usually `train` or `test`). And `mate.result(...)` allows you to save results of your experiments. Check out [its doc page](./mate.md).

### Organizing your experiments

You should create a new experiment for each different configuration you want to run. For example, if you want to run an experiment with a different learning rate, you should create a new experiment. This will keep your experiments organized and easy to find.

Below you can find an example of a valid mate experiment:


<p align="center" style="">
    <img src="./imgs/python_627c3ebbc65dc6ed3d9a69dd6eca558a.svg" style="max-width:90%" alt="Your Image">
</p>