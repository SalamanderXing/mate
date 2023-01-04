
# Mate Project

The root of a mate project is where you can find the `mate.json`. Mate will generate this file for you when you do `mate init`.

---

## File structure of a mate project

The file structure of a mate project is just a collection of nested python modules (a folder is a python module if it contains a `__init__.py` file, which may be empty). When you do a `mate init` you'll automatically generate a simple mate folder structure.

Typically, a file structure will look something like this:

<p align="center" style="">
    <img src="./imgs/None_b615eff207c7f42c2cc4f6d07ddfe126.svg" alt="Your Image">
</p>

And this is how the `mate summary` command displays it:

<p align="center" style="margin:0; padding:0;">
  <img src="./imgs/summary.svg" alt="Your Image">
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

