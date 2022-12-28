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
    members = [
        (k, v)
        for (k, v) in inspect.getmembers(Mate, predicate=inspect.isfunction)
        if not k.startswith("_")
    ]
    for name, val in members:
        doc += method_to_md(name, val)
    return doc


def print_help():
    print_markdown(generate_help_md())


def __convert_str_to_data(input):
    try:
        return int(input)
    except ValueError:
        try:
            return float(input)
        except ValueError:
            if input.lower() == "true":
                return True
            elif input.lower() == "false":
                return False

    return input


def __parse_run_params(args: list):
    params = {}
    for arg in args:
        key, value = arg.split("=")
        params[key[2:]] = __convert_str_to_data(value)
    return params


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
        if arg.lower() == "true":
            return True
        elif arg.lower() == "false":
            return False
        elif arg.lower() == "none":
            return None
        elif arg.isdigit():
            return int(arg)
        else:
            try:
                return float(arg)
            except ValueError:
                return arg

    if len(annotations) < len(args):
        annotations = annotations + (good_guess_type,) * (len(args) - len(annotations))
    for i, (arg, annotation) in enumerate(zip(args, annotations)):
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
    actions = tuple(method.replace("_", "-") for method in methods) + (
        "--help",
        "-h",
    )
    if len(args) == 0 or not args[0] in actions or args[0] in ("--help", "-h"):
        print_help()
    else:
        if args[0] not in actions:
            print_help()
        action = args[0]
        if len(args) > 1 and args[1] in ("--help", "-h"):
            # print(__prettify_method(action, methods[args[0]], in_depth=True))
            md = method_to_md(action)
            print_markdown(md)
            # print_markdown(md)
            # prints the markdown, but with a max width of 80 characters
            # the max width is important for the terminal
            # print(md, width=80)
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
