# Maté 🧉

Mate is a tool designed to improve reproducibility and facilitate development in deep learning. It is a command line tool that offers a variety of features to help you manage your project, including:

- Validating the structure of your project
- Visualizing/summarizing your project
- Summarizing your results
- Running/testing your experiments.
- Managment of Python virtual environment

It also creates a universal template for deep learning projects.

In addition, any project developed with Mate on a public repository gets automatically listed on [MateHub](https://salamanderxing.github.io/matehub). This website is a browser for finding and reusing components created by others (or yourself).

Mate is compatible is any python deep learning framework, such as PyTorch, JAX, and TensorFlow/Keras, since it leverages Python features.


Check out the [documentation](https://salamanderxing.github.io/mate)!


> ⚠️ **This project is still in active development**: It's not yet stable but the first stable version is scheduled by the **10th of January**.

Developed in collaboration of Universiteit von Amstedam.

---

## Installation 🔌

```bash
git clone https://github.com/SalamanderXing/mate
cd mate
pip install -e .
```

---

## Example Projects

More examples coming soon :)

### PyTorch Lightning

- [MNIST Classifier](https://github.com/SalamanderXing/pytorch-lightning-mnist)

### JAX (with Flax)
[JAX](https://github.com/google/jax) is the (relatively) new framework by Google. That uses just-in-time-compilation to improve performance of your neural network.
These projects are based on this [amazing repo](https://github.com/phlippe/uvadlc_notebooks/tree/master/docs/tutorial_notebooks/JAX).

- [CIFAR10 Autoecoder](https://github.com/SalamanderXing/jax-ae)
- [Graph Neural Networks](https://github.com/SalamanderXing/jax-gnn)
- [Normalizing Flow](https://github.com/SalamanderXing/jax-normalizing-flow)
- [Inception, ResNet, DenseNet](https://github.com/SalamanderXing/jax-inception-resnet-densenet)
- [Autoregressive Image Modeling](https://github.com/SalamanderXing/jax-autoregressive-image-modeling)
- [Transformers for text classification](https://github.com/SalamanderXing/jax-transformers)
- [Transformers for anomaly detection](https://github.com/SalamanderXing/jax-anomaly-detection)

---

## Quick Start ⚡
This example will walk you through training and showing results of your model on a Pytorch-Lithtning example. 

First let's clone the project, for example: 
```bash
git clone https://github.com/SalamanderXing/pytorch-lightning-mnist
```
Then go to the project directory:
```bash
cd mnist_classifier
```
Then run:
```
mate summary
```
This will give you an overview of your projec and your componens. Besides that, it will also create a local python virtual environment and install all the dependencies of this project in it. It also tells you where your components have issues. In this case, (hopefully) you will see something like this:
```exec
cd ~/Documents/pytorch-lightning-mnist/mnist_classifier
mate summary svg=true
cd ..
mv summary.svg $tmp
```

then we can train our experiment:

```bash
mate run simple train
```

You should see all the training logs.
If you now do again:
```bash
mate summary
```
You should notice a 💪 next to the experiment. That means that the training was successful:
```exec
cd ~/Documents/pytorch-lightning-mnist/mnist_classifier
mate summary svg=true
cd ..
mv summary.svg $tmp
```


Finally, to visualize our results:

```bash
mate results
```

```exec
cd ~/Documents/pytorch-lightning-mnist/mnist_classifier
mate results svg=true
cd ..
mv results.svg $tmp
```

Mate has inferred the dataset and will group our experiments according to that and put them in the same table.

---

## MateHub

[MateHub](https://salamanderxing.github.io/mate/). Before creating a new module (trainer, data_loader, model) you might want to head over to this site and look if there is anything that either fits your need or allows you to not start from scratch. 

### How it works
All mate projects on public github repo (published by anyone) will be automatically listed on MateHub. It works by using the GitHub rest API.

---

## Comparison to familiar tools

- *Weights & Biases*, *Tensorboard*  is a logger and allows model weights sharing as well. Mate does not attempt to replace logger's functionalities. Use the logger your like best :) That would happend probably inside your trainer module. 
- *[Monai](https://github.com/Project-MONAI/MONAI)*: Focuses on medical imaging and provides pretrained models as well as preprocessing pipelines
- *[Ivy](https://github.com/unifyai/ivy)*: Provides a unified tensor type that work with all backends (frameworks). Works with mate!
- *[THINGSvision](https://github.com/ViCCo-Group/thingsvision)*: Provides a set pretrained models for analysis of their activation. In particular to compare them with brain activations.

---

## Contact 🤝 

For any question, please contact:

[Giulio Zani](mailto:g.zani@uva.nl)

Or join the [discord channel](https://discord.gg/HyNgjBAQZR)
