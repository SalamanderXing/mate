# Maté 🧉

Mate is a tool designed to improve reproducibility and facilitate development in
deep learning. It is a command line tool that offers a variety of features to
help you manage your project, including

- Validating the structure of your project
- Visualizing/summarizing your project
- Remote execution of experiments
- Summarizing your results
- Running/testing your experiments.
- Managment of Python virtual environment

<div style="background-color: #ffffcc; border-left: 6px solid #ffeb3b; padding: 0.5em;">
  ⚠️  Mate is currently under heavy development. Contact me for more details.
</div>

<!---->
<!-- It also creates a universal template for deep learning projects. -->
<!-- In addition, any project developed with Mate on a public repository gets automatically listed on MateHub. This website is a browser for finding and reusing components created by others (or yourself). -->
<!-- Mate is compatible with any python deep learning framework, such as PyTorch, JAX, and TensorFlow/Keras, since it leverages Python features. -->
<!---->
<!---->
<!-- ## [documentation](https://salamanderxing.github.io/mate) -->
<!---->
<!-- Mate is developed in collaboration with the University of Amsterdam. -->
<!---->
<!-- --- -->
<!---->
<!-- ## Installation 🔌 -->
<!---->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_8b3d5a8def640d1dc9b67d83aff7397e.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!-- --- -->
<!---->
<!-- ## Example Projects -->
<!---->
<!---->
<!-- ### PyTorch Lightning -->
<!---->
<!-- - [MNIST Classifier](https://github.com/SalamanderXing/pytorch-lightning-mnist) -->
<!---->
<!-- ### JAX (with Flax) -->
<!-- [JAX](https://github.com/google/jax) is the (relatively) new framework by Google. That uses just-in-time compilation to improve performance of your neural network. -->
<!-- These projects are based on this [amazing repo](https://github.com/phlippe/uvadlc_notebooks/tree/master/docs/tutorial_notebooks/JAX). -->
<!---->
<!-- - [CIFAR10 Autoecoder](https://github.com/SalamanderXing/jax-ae) -->
<!-- - [Graph Neural Networks](https://github.com/SalamanderXing/jax-gnn) -->
<!-- - [Normalizing Flow](https://github.com/SalamanderXing/jax-normalizing-flow) -->
<!-- - [Inception, ResNet, DenseNet](https://github.com/SalamanderXing/jax-inception-resnet-densenet) -->
<!-- - [Autoregressive Image Modeling](https://github.com/SalamanderXing/jax-autoregressive-image-modeling) -->
<!-- - [Transformers for text classification](https://github.com/SalamanderXing/jax-transformers) -->
<!-- - [Transformers for anomaly detection](https://github.com/SalamanderXing/jax-anomaly-detection) -->
<!---->
<!-- --- -->
<!---->
<!-- ## Quick Start ⚡ -->
<!-- This example will walk you through training and showing results of your model on a Pytorch-Lightning example. -->
<!---->
<!-- First let's clone the project, for example:  -->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_49449704768719c08e05230ff2ab1f5b.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!-- Then go to the project directory: -->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_921a8028dd628088e0c41e17f4ab2d06.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!-- Then run: -->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/None_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!-- This will give you an overview of your project and its components. Besides, it will create a local python virtual environment and install dependencies of this project. It also tells you where your components have issues. -->
<!---->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/exec_5ac24db831400cf68943454e2be32f48.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!-- then we can train our experiment: -->
<!---->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_27e5978a0d23c95eaa27ace2684499f6.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!-- You should see all the training logs. -->
<!-- If you now do again: -->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_cacf09445830e5e547952f44e09ae2a6.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!-- You should notice a 💪 next to the experiment. That means that the training was successful: -->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/exec_5ac24db831400cf68943454e2be32f48.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!---->
<!-- Finally, to visualize our results: -->
<!---->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/bash_eda9dcc34a8ecfc1ae5dc9aafab9c28d.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!-- <p align="center" style=""> -->
<!--     <img src="./imgs/exec_e2b436d13e17ff69e83786cac9a87b76.svg" style="max-width:550px" alt="Your Image"> -->
<!-- </p> -->
<!---->
<!-- Mate has inferred the dataset and will group our experiments according to that and put them in the same table. -->
<!---->
<!-- --- -->
<!---->
<!-- ## [MateHub](https://salamanderxing.github.io/matehub/) -->
<!---->
<!-- Before creating a new module (trainer, data_loader, model), you might want to head over to this site and see if there is anything that fits your need or allows you to not start from scratch. -->
<!---->
<!-- ### How it works -->
<!---->
<!-- All mate projects on public GitHub repo (published by anyone) will be automatically listed on MateHub. It works by using the GitHub rest API. -->
<!---->
<!-- --- -->
<!---->
<!-- ## Comparison to familiar tools -->
<!---->
<!-- - *[Weights & Biases](https://wandb.ai/site)*, *[Tensorboard](https://www.tensorflow.org/tensorboard)*  is a logger and allows model weights sharing as well. Mate does not attempt to replace logger's functionalities. Use the logger your like best :) That would happend probably inside your trainer module.  -->
<!-- - *[Monai](https://github.com/Project-MONAI/MONAI)*: Focuses on medical imaging and provides pretrained models as well as preprocessing pipelines -->
<!-- - *[Ivy](https://github.com/unifyai/ivy)*: Provides a unified tensor type that work with all backends (frameworks). Works with mate! -->
<!-- - *[THINGSvision](https://github.com/ViCCo-Group/thingsvision)*: Provides a set pretrained models for analysis of their activation. In particular to compare them with brain activations. -->
<!-- - *[HuggingFace](https://huggingface.co/), [Model Zoo](https://modelzoo.co/)*: These frameworks focus on sharing pretrained models. Mate instead focuses on (among other things) sharing the model components. -->
<!---->
<!-- --- -->
<!---->
<!-- ## Contact 🤝  -->
<!---->

For any question, please contact:

- [Email](mailto:g.zani@uva.nl)
- [Personal Website](https://salamanderxing.github.io/)
- Or join the [discord channel](https://discord.gg/HyNgjBAQZR)
