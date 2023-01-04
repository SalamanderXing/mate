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
    code = code.strip()
    console = Console(record=True, width=70)
    if language:
        console.print(
            Syntax(code, language, theme="monokai", line_numbers=language == "python")
        )
    else:
        console.print(code)
    svg = console.export_svg(title="")
    return svg


def replace_code_block_with_svg(doc: str):

    from hashlib import md5

    def get_img_tag(img_name: str):
        return remove_indent(
            f"""
        <p align="center" style="">
            <img src="./imgs/{img_name}.svg" style="max-width:90%" alt="Your Image">
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
        os.system(f"pandoc ../docs_md_svg/{name}.md -o ../docs/{name}.html")

    os.system("find ../docs -type f -exec sed -i 's/\.md/\.html/g' {} \;")
    bootstrap_css = """
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    >"""
    bootstrap_js = """
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
    """
    bootstrap_bundle = """
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    """
    # adds bootstrap css to all the html files
    # keeping in mind that {} means insertion in an f-string
    pages = {
        "Mate Project": "project",
        "Mate CLI": "cli",
        "Runtime": "mate",
        "Configuration": "config",
        "Tutorials": "tutorials",
    }

    def get_item(key, val):
        return f"""
        <li class="nav-item active">
            <a class="nav-link active" href="./{val}.html">{key}</a>
        </li>"""

    navbar = f"""<nav class="navbar navbar-expand-lg navbar-light" style="background: #5f8d4e; padding:10px">
      <a class="navbar-brand" href="./index.html">🧉 Docs</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            {"".join(get_item(key,val) for (key,val) in pages.items())}
        </ul>
        </div>
    </nav>
    """.replace(
        "\n", ""
    ).replace(
        '"', '"'
    )
    custom_css = """
    <style>
    html, body{
        background:#285430;
        color:black;
    }
    code{
        color:#32CD32;
    }
    h1 {
        font-size: 2.5rem;
    }
    div.container {
        background:#5f8d4e;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-top: 1rem;
    }
    nav {
        background: #5f8d4e;
    }
    </style>
    """
    for file in os.listdir("../docs"):
        if file.endswith(".html"):
            os.system(
                f"sed -i '1i<div class=\"container\" style='max-width:1000px'>' ../docs/{file}"
            )
            os.system(f"sed -i '$a</div>' ../docs/{file}")

            os.system(f"sed -i '1i{navbar}' ../docs/{file}")

    os.system('prettier --write "../docs/*.html"')

    for file in os.listdir("../docs"):
        if file.endswith(".html"):
            with open(f"../docs/{file}", "r") as f:
                contents = f.read()
            new_contents = (
                bootstrap_css + custom_css + contents + bootstrap_js + bootstrap_bundle
            )
            with open(f"../docs/{file}", "w") as f:
                f.write(new_contents)

    os.system("rm -rf ../docs/imgs/*")
    os.system("cp ../docs_md/imgs/* ../docs_md_svg/imgs/")
    os.system("cp ../docs_md_svg/imgs/* ../docs/imgs/")
    # adds the div with the class container to all the html files, not in the body but at the beginning and end of each file


if __name__ == "__main__":
    generate_docs()
