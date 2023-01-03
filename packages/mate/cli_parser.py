"""
## Cli Parser

Mate's cli parser is a simple parser that parses the command line arguments and calls the appropriate method on the Mate class.

Notice that for boolean arguments, you can use either false or False, true or True. And for None you can use either null or None.

**Example**

```
mate init my_project venv=false
```

"""
from .mate_config import MateConfig
from .mate_project import MateProject
from .utils import print_markdown, print
from .mate_cli import Mate
import inspect
from typing import Optional, Callable, Sized
import ipdb
import os
import sys


def __parse_signature(class_name, method_name: str):
    return tuple(
        val
        for (name, val) in inspect.signature(
            getattr(class_name, method_name)
        ).parameters.items()
        if name != "self"
    )


def __get_methods_with_arguments(class_name):
    return {
        k: __parse_signature(class_name, k)
        for k in class_name.__dict__.keys()
        if not k.startswith("_")
    }


def method_to_md(method_name, member: Optional[Callable] = None):
    if member is None:
        member = getattr(Mate, method_name)
    assert member is not None
    params = inspect.signature(member).parameters.values()
    inline_params = " ".join(
        [
            f"<{('optional ' if (param.default != inspect._empty) else '') + param.name}>"
            for param in params
            if param.name != "self"
        ]
    )
    param_descriptions = {
        line[1].split(" ")[1]: ":".join(line[2:])
        for line in [l.strip().split(":") for l in str(member.__doc__).split("\n")]
        if len(line) > 1 and line[1].startswith("param")
    }

    list_params = "\n".join(
        [
            f"  - {param.name} : `{param.annotation.__name__}` : {param_descriptions.get(param.name, '')}"
            + (f"={param.default}" if param.default != inspect._empty else "")
            for param in params
            if param.name != "self"
        ]
    )
    method_description = "\n".join(
        [
            line
            for line in str(member.__doc__).split("\n")
            if not line.strip().startswith(":param")
        ]
    )
    doc = f"""
    ```
      mate {method_name} {inline_params}
    ```

    **Params**
    {list_params}

    {method_description}
    ---
    """
    return doc


def generate_help_md() -> str:

    doc = str(Mate.__doc__) + "\n --- \n"
    current_docstring = str(sys.modules[__name__].__doc__)
    doc += current_docstring + "\n --- \n"
    members = [
        (k, v)
        for (k, v) in inspect.getmembers(Mate, predicate=inspect.isfunction)
        if not k.startswith("_")
    ]
    for name, val in members:
        doc += method_to_md(name, val)
    return doc


class MateHelp:
    def __init__(self):
        self.help_options = (
            "cli",
            "mate",
            "config",
            "project",
        )

    def print_help(self, what: str = "cli") -> None:
        if what == "cli":
            print_markdown(generate_help_md())
        elif what == "mate":
            print_markdown(Mate.__doc__)
        elif what == "config":
            print_markdown(MateConfig.__doc__)
        elif what == "project":
            print_markdown(MateProject.__doc__)
        else:
            print_markdown(generate_help_md())

    def get_help_md(self, what: str = "cli") -> str:
        if what == "cli":
            return generate_help_md()
        elif what == "mate":
            return str(Mate.__doc__)
        elif what == "config":
            return str(MateConfig.__doc__)
        elif what == "project":
            return str(MateProject.__doc__)
        else:
            return generate_help_md()

    def get_all_help_md(self) -> dict[str, str]:
        return {key: self.get_help_md(key) for key in self.help_options}


def collect_args(args: list[str], annotations: tuple[Callable]) -> tuple[list, dict]:
    # collects the arguments into a list and a dictionary
    # the list contains the positional arguments
    # the dictionary contains the keyword arguments
    # the arguments are split by the "=" sign
    # if there is no "=" sign, the argument is considered a positional argument
    # it also checks that there are no positional arguments after keyword arguments
    kwargs = {}
    positional_args = []
    positional_args_started = False

    def good_guess_type(arg: str):
        types = [int, float, str]
        if arg.lower() in ("none", "null"):
            return None
        elif arg.lower() == "true":
            return True
        elif arg.lower() == "false":
            return False
        for t in types:
            try:
                return t(arg)
            except ValueError:
                pass

    def boolean_type(arg: str):
        if arg.lower() == "true":
            return True
        elif arg.lower() == "false":
            return False
        else:
            raise ValueError("Not a boolean")

    if len(annotations) < len(args):
        annotations = annotations + (good_guess_type,) * (len(args) - len(annotations))
    for i, (arg, annotation) in enumerate(zip(args, annotations)):
        if annotation == bool:
            annotation = boolean_type
        elif annotation == inspect._empty:
            annotation = good_guess_type
        if "=" in arg:
            key, value = arg.split("=")
            kwargs[key] = annotation(value)
            positional_args_started = True
        else:
            positional_args.append(annotation(arg))
            if positional_args_started:
                raise ValueError(
                    f"positional argument {arg} after keyword argument {args[i-1]}"
                )

    return positional_args, kwargs


def main():
    methods = __get_methods_with_arguments(Mate)
    args = sys.argv[1:]
    raw_method_args = args[1:]
    help_args = ("help", "--help", "-h")
    actions = tuple(method.replace("_", "-") for method in methods) + help_args
    help = MateHelp()
    if len(args) == 0 or not args[0] in actions or args[0] in help_args:
        if len(args) > 1:
            help.print_help(args[1])
        else:
            help.print_help()
    else:
        if args[0] not in actions:
            help.print_help()
        action = args[0]
        if len(args) > 1 and args[1] in ("--help", "-h"):
            md = method_to_md(action)
            print_markdown(md)
        else:
            annotations = tuple(
                param.annotation
                for param in methods[action]
                if (param.kind != inspect.Parameter.VAR_KEYWORD)
                and (param.kind != inspect.Parameter.VAR_POSITIONAL)
            )

            pos_args, kwargs = collect_args(raw_method_args, annotations)
            if action == "init":
                Mate.init(*pos_args, **kwargs)
            else:
                mate = Mate()
                getattr(mate, action)(*pos_args, **kwargs)
