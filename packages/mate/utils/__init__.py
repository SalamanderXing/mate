from .bunch import Bunch
from rich.padding import Padding
from rich.console import Console
from rich.markdown import Markdown
from glob import glob
import os
import shutil

remove_indent = lambda text: "\n".join(
    [line[len(line) - len(line.lstrip()) :] for line in text.split("\n")]
)
console = Console(width=75)
print = console.print
print_markdown = lambda x: print(Padding(Markdown(remove_indent(x)), (1, 0, 0, 5)))


def rmwithin(path: str):
    for file in glob(path + "*"):
        if os.path.isdir(file):
            shutil.rmtree(file)
        else:
            os.remove(file)
