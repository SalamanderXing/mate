from .cli_parser import generate_help_md
from .utils import remove_indent
from .mate_config import MateConfig


def generate_docs():
    doc = remove_indent(generate_help_md())
    doc += remove_indent(
        f"""
    ---

    {remove_indent(MateConfig.__doc__)}

    """
    )
    with open("../docs.md", "w") as f:
        f.write(doc)


if __name__ == "__main__":
    generate_docs()
