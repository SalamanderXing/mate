from .bunch import Bunch
from rich.padding import Padding
from rich.console import Console
from rich.markdown import Markdown
from glob import glob
import os
import shutil

# remove_indent = lambda text: "\n".join(
#     [line[len(line) - len(line.lstrip()) :] for line in text.split("\n")]
# )
def remove_indent(text: str):
    # counts the indent of the first line
    indent = len(text) - len(text.lstrip())
    # removes the indent from all lines
    def indent_remover(line: str):
        indent_val = min(indent, len(line) - len(line.lstrip()))
        return line[indent_val:]
    return "\n".join([indent_remover(line) for line in text.split("\n")])
console = Console(width=75)
print = console.print
print_markdown = lambda x: print(Padding(Markdown(remove_indent(x)), (1, 0, 0, 5)))


def rmwithin(path: str):
    for file in glob(path + "*"):
        if os.path.isdir(file):
            shutil.rmtree(file)
        else:
            os.remove(file)
