import os
from .utils import remove_indent
from .cli_parser import MateHelp


def generate_doc(name: str, doc: str):
    mate_cli = remove_indent(doc)
    with open(f"../docs_md/{name}.md", "w") as f:
        f.write(mate_cli)

    os.system(f"pandoc ../docs_md/{name}.md -o ../docs/{name}.html")


def generate_docs():
    help = MateHelp()
    all_docs = help.get_all_help_md()
    for key, val in all_docs.items():
        generate_doc(key, val)

    os.system("pandoc ../docs_md/index.md -o ../docs/index.html")
    # replaces all the links to .md files to .html
    # it does this with all the files in the docs folder
    os.system("find ../docs -type f -exec sed -i 's/\.md/\.html/g' {} \;")

    os.system('prettier --write "../docs/*"')


if __name__ == "__main__":
    generate_docs()
