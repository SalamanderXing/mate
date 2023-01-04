# Mate project from scratch

This is a step by step guide to create a new project from scratch.

## 1 Create a new project
Make sure you're inside a **git** repository and run the following command:

<p align="center" style="">
    <img src="./imgs/None_4895d540a4c2b1dd4c7970e8ce84c86e.svg" style="max-width:90%" alt="Your Image">
</p>

This will do the following:

- Create a new folder called `new_project`, with inside the default folder structure
- Create a virtual environment. This will be used to install all the dependencies

To make sure everything worked, first navigate inside the `new_project` folder:

<p align="center" style="">
    <img src="./imgs/bash_789d7abf2adb950f000c2d624e865c20.svg" style="max-width:90%" alt="Your Image">
</p>

Then run:

<p align="center" style="">
    <img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:90%" alt="Your Image">
</p>

## 2 Create a your first module

Make sure you're still inside the `new_project` folder and run the following command:

<p align="center" style="">
    <img src="./imgs/bash_fc48862cdefaf78f565ff34a1859c353.svg" style="max-width:90%" alt="Your Image">
</p>

Now run again:

<p align="center" style="">
    <img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:90%" alt="Your Image">
</p>

Now let's add some code to our module. Create a new file `models/my_module/main.py` with your favorite editor and add the following code:

<p align="center" style="">
    <img src="./imgs/python_9d2be9ba1da6403958c70858e78960c4.svg" style="max-width:90%" alt="Your Image">
</p>

Then export the function to the `__init__.py` file by running:

<p align="center" style="">
    <img src="./imgs/bash_cf0c2b10dbe522a56c0d4552cccf0b79.svg" style="max-width:90%" alt="Your Image">
</p>

## 3 Create your first experiment

Now let's create an experiment. Run the following command:

<p align="center" style="">
    <img src="./imgs/bash_936a8f6a68d25d2dcd8df89eda2c8989.svg" style="max-width:90%" alt="Your Image">
</p>

Then edit the file `experiments/my_experiment.py`

<p align="center" style="">
    <img src="./imgs/python_7a778df3b29f27c0ebf0a8f1cfab848b.svg" style="max-width:90%" alt="Your Image">
</p>

## 4 Run your experiment

Now let's run the experiment. Run the following command:

<p align="center" style="">
    <img src="./imgs/bash_07f188752de1b294a37b206bc95d59be.svg" style="max-width:90%" alt="Your Image">
</p>

You should see `Training a model` printed in the console.
Hurrah! You just created your first project with mate!