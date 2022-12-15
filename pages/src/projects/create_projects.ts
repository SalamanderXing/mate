// imports fs, path, etc.
import fs from "fs";
import Project from "./project";
import MateModule from "./mate_module";

const main = () => {
  const projects = [
    new Project(
      "classification_mnist",
      [
        new MateModule(
          "cnn",
          "model",
          ["cnn", "mnist"],
          ["tensorflow", "keras"],
        ),
        new MateModule("trainer", "trainer", ["mnist"], [
          "tensorflow",
          "keras",
        ]),
        new MateModule("data_loader", "data_loader", ["mnist"], [
          "tensorflow",
          "keras",
        ]),
      ],
      ["mnist", "classification"],
      "A simple CNN model for classifying MNIST digits",
    ),
    new Project(
      "classification_cifar10",
      [
        new MateModule("cnn", "model", ["cnn", "cifar10"], [
          "tensorflow",
          "keras",
        ]),
        new MateModule("trainer", "trainer", ["cifar10"], [
          "tensorflow",
          "keras",
        ]),
        new MateModule("data_loader", "data_loader", ["cifar10"], [
          "tensorflow",
          "keras",
        ]),
      ],
      ["cifar10", "classification"],
      "A simple CNN model for classifying CIFAR10 images",
    ),
    new Project(
      "regression_imagenet",
      [
        new MateModule("resnet", "model", ["resnet", "imagenet"], [
          "tensorflow",
          "keras",
        ]),
        new MateModule("trainer", "trainer", ["imagenet"], [
          "tensorflow",
          "keras",
        ]),
        new MateModule("data_loader", "data_loader", ["imagenet"], [
          "tensorflow",
          "keras",
        ]),
      ],
      ["imagenet", "regression"],
      "A simple ResNet model for classifying ImageNet images",
    ),
  ];

  console.log(projects);
  // write projects to file (pretty)
  fs.writeFileSync(
    "projects.json",
    JSON.stringify(projects, null, 2),
  );
};

main();
