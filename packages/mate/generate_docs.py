import os
from .utils import remove_indent
from .cli_parser import MateHelp
from rich.console import Console
from rich.syntax import Syntax
from typing import Optional
from rich.terminal_theme import MONOKAI
import ipdb


def generate_doc(name: str, doc: str):
    stripped_doc = remove_indent(doc)
    doc_with_svg = replace_code_block_with_svg(stripped_doc)
    with open(f"../docs_md/{name}.md", "w") as f:
        f.write(doc_with_svg)

    os.system(f"pandoc ../docs_md/{name}.md -o ../docs/{name}.html")


def code_block_to_svg(code: str, language: Optional[str] = None):
    console = Console(record=True, width=70)
    if language:
        console.print(Syntax(code, language, theme="monokai", line_numbers=True))
    else:
        console.print(code)
    svg = console.export_svg(title="", theme=MONOKAI)
    return svg


"""
def replace_code_block_with_svg(doc: str):
    lines = doc.splitlines()
    new_lines = []
    code: Optional[str] = None
    language = None
    for line in lines:
        if code is None and line.startswith("```"):
            ipdb.set_trace()
            language = line.replace("```", "") or None
            code = ""
        elif line.startswith("```"):
            assert code is not None
            svg = code_block_to_svg(code, language)
            new_lines.append(svg)
        elif code is not None:
            code += line + "\n"
        else:
            new_lines.append(line)
    return "\n".join(new_lines)
"""


def replace_code_block_with_svg(doc: str):

    # modified_contents = re.sub(
    #     r"(?<=```)(.+?)(?=```)",
    #     lambda m: m.group(1).upper(),
    #     doc,
    #     flags=re.DOTALL | re.MULTILINE,
    # )
    # does the same as the above but with a for loop
    from hashlib import md5

    def get_img_tag(img_name: str):
        return f"""
        <p align="center" style="">
            <img src="./imgs/{img_name}.svg" alt="Your Image">
        </p>"""

    code: Optional[str] = None
    language = None
    new_lines = []
    for line in doc.splitlines():
        if code is None:
            if line.startswith("```"):
                language = line.replace("```", "") or None
                code = ""
            else:
                new_lines.append(line)
        elif line.startswith("```"):
            assert code is not None
            svg = code_block_to_svg(code, language)
            img_name = f"{language}_{md5(code.encode()).hexdigest()}"
            with open(f"../docs/imgs/{img_name}.svg", "w") as f:
                f.write(svg)
            new_lines.append(get_img_tag(img_name).strip())
            code = None
        else:
            code += line + "\n"

    return "\n".join(new_lines)


def generate_docs():
    help = MateHelp()
    all_docs = help.get_all_help_md()
    for key, val in all_docs.items():
        generate_doc(key, val)

    os.system("pandoc ../docs_md/index.md -o ../docs/index.html")
    # replaces all the links to .md files to .html
    # it does this with all the files in the docs folder
    os.system("find ../docs -type f -exec sed -i 's/\.md/\.html/g' {} \;")
    bootstrap_css = """<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">"""
    # adds bootstrap css to all the html files
    # keeping in mind that {} means insertion in an f-string
    custom_css = """
    <style>
    h1 {
        font-size: 2.5rem;
    }
    div.container {
        margin-top: 2rem;
    }
    </style>
    """
    for file in os.listdir("../docs"):
        if file.endswith(".html"):
            os.system(
                f"sed -i '1i<div class=\"container\" style='max-width:50%'>' ../docs/{file}"
            )
            os.system(f"sed -i '$a</div>' ../docs/{file}")

    os.system('prettier --write "../docs/*.html"')

    for file in os.listdir("../docs"):
        if file.endswith(".html"):
            with open(f"../docs/{file}", "r") as f:
                contents = f.read()
            new_contents = bootstrap_css + custom_css + contents
            with open(f"../docs/{file}", "w") as f:
                f.write(new_contents)

    os.system("cp -r ../docs_md/imgs ../docs/imgs")
    # adds the div with the class container to all the html files, not in the body but at the beginning and end of each file


if __name__ == "__main__":
    generate_docs()
