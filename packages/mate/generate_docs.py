import os
from .utils import remove_indent
from .cli_parser import MateHelp
from rich.console import Console
from rich.syntax import Syntax
from typing import Optional
from glob import glob
import ipdb


def generate_doc(name: str, doc: str):
    stripped_doc = remove_indent(doc)
    with open(f"../docs_md/{name}.md", "w") as f:
        f.write(stripped_doc)


def replace_code_with_svg():
    for file in glob("../docs_md/*.md"):
        with open(file, "r") as f:
            doc = f.read()
        new_doc = replace_code_block_with_svg(doc)
        file_name = os.path.basename(file)
        with open(f"../docs_md_svg/{file_name}", "w") as f:
            f.write(new_doc)


def code_block_to_svg(code: str, language: Optional[str] = None):
    if not language == "exec":
        code = code.strip()
        console = Console(record=True, width=50)
        if language:
            console.print(
                Syntax(
                    code, language, theme="monokai", line_numbers=language == "python"
                )
            )
        else:
            console.print(code)
        title = (
            (language if not language == "bash" else "terminal")
            if not language is None
            else ""
        )
        svg = console.export_svg(title=title)
    else:
        new_code = code.replace("$tmp", os.path.join(os.getcwd(), "tmp.svg"))
        os.system(new_code)
        if os.path.exists("tmp.svg"):
            with open("tmp.svg", "r") as f:
                svg = f.read()
            os.remove("tmp.svg")
        else:
            svg = ""
    return svg


def replace_code_block_with_svg(doc: str):

    from hashlib import md5

    def get_img_tag(img_name: str):
        return remove_indent(
            f"""
        <p align="center" style="">
            <img src="./imgs/{img_name}.svg" style="max-width:550px" alt="Your Image">
        </p>"""
        )

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
            with open(f"../docs_md_svg/imgs/{img_name}.svg", "w") as f:
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

    replace_code_with_svg()
    for file in glob("../docs_md_svg/*.md"):
        # gets the file name without the extension
        name = os.path.basename(file).split(".")[0]
        os.system(f"pandoc ../docs_md_svg/{name}.md -o ../docs_html/{name}.html")

    os.system("find ../docs -type f -exec sed -i 's/\.md/\.html/g' {} \;")
    os.system("rm -rf ../docs_html/imgs/*")
    os.system("cp ../docs_md/imgs/* ../docs_md_svg/imgs/")
    os.system("cp ../docs_md_svg/imgs/* ../docs_html/imgs/")
    # reads all the html files and merges them into a json
    merged = {}
    for file in glob("../docs_html/*.html"):
        key = os.path.basename(file).split(".")[0]
        with open(file, "r") as f:
            merged[key] = f.read()
    import json
    with open("../website/src/merged.json", "w") as f:
        json.dump(merged, f)

    os.system("cp ../docs_md_svg/imgs/* ../imgs/")
    os.system("cp ../docs_md_svg/index.md ../README.md")


if __name__ == "__main__":
    generate_docs()
