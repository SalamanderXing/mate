from .cli_parser import generate_help_md
from .utils import remove_indent
from .mate_config import MateConfig


def generate_docs():
    mate_cli = remove_indent(generate_help_md())
    with open("../documentation/mate_cli.md", "w") as f:
        f.write(mate_cli)


    mate_cli += remove_indent(remove_indent(MateConfig.__doc__))


if __name__ == "__main__":
    generate_docs()
