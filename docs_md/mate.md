
# Mate Runtime

Class containing all the information about the current run. You usually want to import it into your experiment like this:

```python
from mate import mate  # instance of Mate, containing all the information about the current run
```

You can use this to:
- Get the current CLI command
- Save the run to a JSON file
- Get the current save directory
- Get the current checkpoint path

**Example**

```python
from mate import mate

if mate.command == "train":
    # do training
elif mate.command == "test":
    # do testing
```


 --- 


### `mate.result(values: dict) -> None`

Save the results of the current run.

**Example**

```python
from mate import mate

mate.result({"loss": 0.5})
```

This is not meant to replace a proper logging framework,
but rather to provide a simple way to save the results of an experiment.
This is especially useful when you want to compare multiple experiments (see `mate.results()`).

**Pytorch Lightning Example**

If you want, with pytorch lightning, you can directly pass the `logged_metrics` dictionary to this function.

```python
from mate import mate
from pytorch_lightning import LightningModule
from pytorch_lightning import Trainer

pl_module = # initialize your pytorch lightning module
trainer = Trainer()

if mate.is_train:
    trainer.fit(pl_module)
    mate.result(pl_module.logged_metrics)
```



 --- 

### `mate.results() -> dict[str, dict[str, float]]`

Get the results of all experiments. in the form of a dictionary.
The dictionary is structured as follows:

```python
{
    "experiment_name": {
        "metric_name": metric_value
        ...
    }
    ...
}
```

```python
from mate import mate

results = mate.results()
# do your analyses and plotting

```

 --- 
