// imports fs, path, etc.
import fs from "fs";

type ModuleType = "model" | "trainer" | "data_loader";

class Module {
  constructor(
    public name: string,
    public type: ModuleType,
    public tags: string[],
    public dependencies: string[],
  ) {}
}

class Project {
  constructor(
    public name: string,
    public modules: Module[],
    public tags: string[],
    public description: string,
  ) {}
}

const main = () => {
  const projects = [
    new Project(
      "classification_mnist",
      [
        new Module("cnn", "model", ["cnn", "mnist"], ["tensorflow", "keras"]),
        new Module("trainer", "trainer", ["mnist"], ["tensorflow", "keras"]),
        new Module("data_loader", "data_loader", ["mnist"], [
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
        new Module("cnn", "model", ["cnn", "cifar10"], ["tensorflow", "keras"]),
        new Module("trainer", "trainer", ["cifar10"], ["tensorflow", "keras"]),
        new Module("data_loader", "data_loader", ["cifar10"], [
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
        new Module("resnet", "model", ["resnet", "imagenet"], [
          "tensorflow",
          "keras",
        ]),
        new Module("trainer", "trainer", ["imagenet"], ["tensorflow", "keras"]),
        new Module("data_loader", "data_loader", ["imagenet"], [
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
