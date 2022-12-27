from .bunch import Bunch

remove_indent = lambda text: "\n".join(
    [line[len(line) - len(line.lstrip()) :] for line in text.split("\n")]
)
