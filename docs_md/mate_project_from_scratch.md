# Mate project from scratch

This is a step by step guide to create a new project from scratch.

## 1 Create a new project
Make sure you're inside a **git** repository and run the following command:

```
mate init new_project
```

This will do the following:

- Create a new folder called `new_project`, with inside the default folder structure
- Create a virtual environment. This will be used to install all the dependencies

To make sure everything worked, first navigate inside the `new_project` folder:

```bash
cd new_project
```

Then run:

```bash
mate summary
```

## 2 Creating your first module

Make sure you're still inside the `new_project` folder and run the following command:

```bash
mate create models.my_module
```

Now run again:

```bash
mate summary
```

```exec
cd ~/Documents/hey
mate init new_project venv=false
cd new_project
mate create models.my_module
mate summary svg=true
cd ..
mv summary.svg $tmp
```
You may have noticed a ❌ next to our new module. This is because the module is not exporting anything.

So let's add some code to our module. Create a new file `models/my_module/main.py` (can be called anything) with your favorite editor and add the following:

```python

def my_function():
    print("Training a model")
    return 0.5 # accuracy
```

Then export the function to the `__init__.py` file by running:

```bash
mate export models.my_module.main.my_function
```

If we now run `mate summary`:

```exec
cd ~/Documents/hey/new_project
echo "def my_function():
    print('Training a model')" > models/my_module/main.py
mate export models.my_module.main.my_function
mate summary svg=true
cd ..
mv summary.svg $tmp
```
We see that the cross has been replaced by a green checkmark. This is because now our module is exporting something. 

To check what's being exported by a module, we can use the `mate inspect` command:

```bash
mate inspect models.my_module
```

```exec
cd ~/Documents/hey/new_project
mate inspect models.my_module svg=true
cd ..
mv inspect.svg $tmp
```


## 3 Create your first experiment

Now let's create an experiment. Run the following command:

```bash
mate create experiments.my_experiment
```

Then edit the file `experiments/my_experiment.py`

```python
from mate import mate
from ..models.my_module import my_function

if mate.is_train:
    result = my_function()
    mate.result({'train_accuracy': result})
```

## 4 Run your experiment

Now let's run the experiment. Run the following command:

```bash
mate run my_experiment train
```

```exec
cd ~/Documents/hey
cd new_project
mate create experiments.my_experiment
echo "from mate import mate
from ..models.my_module import my_function

if mate.is_train:
    my_function()
    mate.result({'train_accuracy': 0.5})" > experiments/my_experiment.py
mate run my_experiment train
mate summary svg=true
cd ..
mv summary.svg $tmp
```

You should see `Training a model` printed in the console.
Also notice a 💪 next to the experiment. This means that mate has correctly saved its results.


Hurrah! You just created your first project with mate!

## 5 (Optional) Adding descriptions to your modules and experiments

If you want, you can add descriptions to your modules and experiments in markdown format. This will make it easier to understand what they do.

To add a description to a module, create a file `models/my_module/README.md` with your favorite editor and add the following:

```markdown
# My first module

- list item

*italic* and **bold** are supported
```

To add a description to an experiment, you must edit the experiment's docstring.

```python
"""
# My first experiment

- list item
- another list item
"""


from mate import mate
from ..models.my_module import my_function

if mate.is_train:
    result = my_function()
    mate.result({'train_accuracy': result})
```

To see the description of a module or experiment, run:

```bash
mate show models.my_module
```
```exec
cd ~/Documents/hey/new_project
echo "# My first module

- list item

*italic* and **bold** are supported" > models/my_module/README.md
mate show models.my_module svg=true
cd ..
mv show.svg $tmp
```

```bash
mate show experiments.my_experiment
```

```exec
cd ~/Documents/hey/new_project
sed -i '1s/^/"""# My first experiment

- list item
- another list item

"""\n\n/' experiments/my_experiment.py
mate show experiments.my_experiment svg=true
cd ..
mv show.svg $tmp
```



