
# Mate Runtime

Class containing all the information about the current run. You usually want to import it into your experiment like this:

<p align="center" style="">
    <img src="./imgs/python_de61f1f24fe60afb6f39e39e8a19fa27.svg" style="max-width:550px" alt="Your Image">
</p>

You can use this to:
- Get the current CLI command
- Save the run to a JSON file
- Get the current save directory
- Get the current checkpoint path

**Example**

<p align="center" style="">
    <img src="./imgs/python_5394662fc05f9041bd2eeb14e6f3316f.svg" style="max-width:550px" alt="Your Image">
</p>


 --- 


### `mate.result(values: dict) -> None`

Save the results of the current run.

**Example**

<p align="center" style="">
    <img src="./imgs/python_68971974bee6f7c32178807e5e3524c6.svg" style="max-width:550px" alt="Your Image">
</p>

This is not meant to replace a proper logging framework,
but rather to provide a simple way to save the results of an experiment.
This is especially useful when you want to compare multiple experiments (see `mate.results()`).

**Pytorch Lightning Example**

If you want, with pytorch lightning, you can directly pass the `logged_metrics` dictionary to this function.

<p align="center" style="">
    <img src="./imgs/python_0eeddeef797fd6a829d422195e2db94d.svg" style="max-width:550px" alt="Your Image">
</p>



 --- 

### `mate.results() -> dict[str, dict[str, float]]`

Get the results of all experiments. in the form of a dictionary.
The dictionary is structured as follows:

<p align="center" style="">
    <img src="./imgs/python_b5133ff57f74d897dc3465e4c37ef46b.svg" style="max-width:550px" alt="Your Image">
</p>

<p align="center" style="">
    <img src="./imgs/python_cb990227e65fe21658e842f17c77154c.svg" style="max-width:550px" alt="Your Image">
</p>

 --- 