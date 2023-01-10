# Mate project from scratch

This is a step by step guide to create a new project from scratch.

## 1 Create a new project
Make sure you're inside a **git** repository and run the following command:

<p align="center" style="">
    <img src="./imgs/None_4895d540a4c2b1dd4c7970e8ce84c86e.svg" style="max-width:550px" alt="Your Image">
</p>

This will do the following:

- Create a new folder called `new_project`, with inside the default folder structure
- Create a virtual environment. This will be used to install all the dependencies

To make sure everything worked, first navigate inside the `new_project` folder:

<p align="center" style="">
    <img src="./imgs/bash_8ddda20d01ccb24f4b4b7258f2a69edf.svg" style="max-width:550px" alt="Your Image">
</p>

Then run:

<p align="center" style="">
    <img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>

## 2 Creating your first module

Make sure you're still inside the `new_project` folder and run the following command:

<p align="center" style="">
    <img src="./imgs/bash_fc48862cdefaf78f565ff34a1859c353.svg" style="max-width:550px" alt="Your Image">
</p>

Now run again:

<p align="center" style="">
    <img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/exec_602ae74162945697f02da5de3ecf4461.svg" style="max-width:550px" alt="Your Image">
</p>
You may have noticed a ❌ next to our new module. This is because the module is not exporting anything.

So let's add some code to our module. Create a new file `models/my_module/main.py` (can be called anything) with your favorite editor and add the following:

<p align="center" style="">
    <img src="./imgs/python_a61cb645b68cd52236ad739c470372fd.svg" style="max-width:550px" alt="Your Image">
</p>

Then export the function to the `__init__.py` file by running:

<p align="center" style="">
    <img src="./imgs/bash_cf0c2b10dbe522a56c0d4552cccf0b79.svg" style="max-width:550px" alt="Your Image">
</p>

If we now run `mate summary`:

<p align="center" style="">
    <img src="./imgs/exec_49f62d530d5e9eb5856f649e9951a04c.svg" style="max-width:550px" alt="Your Image">
</p>
We see that the cross has been replaced by a green checkmark. This is because now our module is exporting something. 

To check what's being exported by a module, we can use the `mate inspect` command:

<p align="center" style="">
    <img src="./imgs/bash_8385b561a19ce4a53d1e42a26f9c3d6a.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/exec_2725d6cb6f180e40223aee2dbcf4fa37.svg" style="max-width:550px" alt="Your Image">
</p>


## 3 Create your first experiment

Now let's create an experiment. Run the following command:

<p align="center" style="">
    <img src="./imgs/bash_936a8f6a68d25d2dcd8df89eda2c8989.svg" style="max-width:550px" alt="Your Image">
</p>

Then edit the file `experiments/my_experiment.py`

<p align="center" style="">
    <img src="./imgs/python_298543af0df98224eebd70b70c719437.svg" style="max-width:550px" alt="Your Image">
</p>

## 4 Run your experiment

Now let's run the experiment. Run the following command:

<p align="center" style="">
    <img src="./imgs/bash_07f188752de1b294a37b206bc95d59be.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/exec_89343c79bac5d916e84bcc7e5f0414ab.svg" style="max-width:550px" alt="Your Image">
</p>

You should see `Training a model` printed in the console.
Also notice a 💪 next to the experiment. This means that mate has correctly saved its results.


Hurrah! You just created your first project with mate!

## 5 (Optional) Adding descriptions to your modules and experiments

If you want, you can add descriptions to your modules and experiments in markdown format. This will make it easier to understand what they do.

To add a description to a module, create a file `models/my_module/README.md` with your favorite editor and add the following:

<p align="center" style="">
    <img src="./imgs/markdown_6a4ff2c04dd8390bef6bf4004a521a9f.svg" style="max-width:550px" alt="Your Image">
</p>

To add a description to an experiment, you must edit the experiment's docstring.

<p align="center" style="">
    <img src="./imgs/python_1ec32fad7e3db9e71c457d5d60f30173.svg" style="max-width:550px" alt="Your Image">
</p>

To see the description of a module or experiment, run:

<p align="center" style="">
    <img src="./imgs/bash_d78b236273658747d5b98a2b77574704.svg" style="max-width:550px" alt="Your Image">
</p>
<p align="center" style="">
    <img src="./imgs/exec_11c022b8840181b1966d80c392da4889.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/bash_0161a5763783d86867674fd9b0b57f32.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/exec_bda4fc131673664a698e87b7e6779a58.svg" style="max-width:550px" alt="Your Image">
</p>


