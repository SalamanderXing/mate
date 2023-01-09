
# Mate Project

The root of a mate project is where you can find the `mate.json`. Mate will generate this file for you when you do `mate init`.

Mate leverages on modularity. This means that you should organize your project as a set of *independent* modules. Independent means that your modules cannot import each other. This is a good thing because it allows you to reuse your modules in other projects. For example, you can use the same data loader in a different project. This is also a good thing because it allows you to easily test your modules. You can test your data loader without having to test your model or your trainer.

A python module can *export* objects (such as classes or functions) by adding them to the `__init__.py` file at the root of your module. Notice that you don't have to do this manually, you can do `mate export model.my_model.file_name.ClassName` for example (see the [CLI docs](./cli.md))

Each module can belong to one of the following categories:

- **models**: contains the models of your project. If, for example your working with pytorch, each model should be a subclass of `torch.nn.Module`.
- **data_loaders**: contains the data loaders of your project. If, for example your working with pytorch, each data loader should be a subclass of `torch.utils.data.Dataset`. But mate doesn't check this, so if you want you can also export functions or something else
- **trainers**: modules in here should contain the training logic/loop.
- **experiments**: contains the experiments of your project. Each experiment is a python file in charge of running the experiments. See the [experiments docs](./experiments.md) for more info.


## File structure of a mate project

The file structure of a mate project is just a collection of nested python modules (a folder is a python module if it contains a `__init__.py` file, which may be empty). When you do a `mate init` you'll automatically generate a simple mate folder structure.

Typically, a file structure will look something like this:

<p align="center" style="">
    <img src="./imgs/None_b615eff207c7f42c2cc4f6d07ddfe126.svg" style="max-width:550px" alt="Your Image">
</p>

And this is how the `mate summary` command displays it:

<p align="center" style="margin:0; padding:0;">
  <img src="./imgs/summary.svg" alt="Your Image" style="max-width:500px">
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

