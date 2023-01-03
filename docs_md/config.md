
### Configuring a mate project

`mate.json` is the main configuration file for a Mate project. It defines where the root of a mate project is. The format is JSON.

**Key-value pairs**

- results_folder : `str` : The folder where all results are stored. This is relative to the root **above** the project.
- venv : `bool`=true : Whether to use a virtual environment. If `True` a virtual environment is created in the project root. If `False` no virtual environment is created and the same python as the one used to execute mate will be used instead.

**Example**:

If your `mate.json` lies in `/home/user/project_repo/mate_project/mate.json` and it looks like this:
<svg class="rich-terminal" viewBox="0 0 750 172.0" xmlns="http://www.w3.org/2000/svg">
    <!-- Generated with Rich https://www.textualize.io -->
    <style>

    @font-face {
        font-family: "Fira Code";
        src: local("FiraCode-Regular"),
                url("https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff2/FiraCode-Regular.woff2") format("woff2"),
                url("https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Regular.woff") format("woff");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: "Fira Code";
        src: local("FiraCode-Bold"),
                url("https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff2/FiraCode-Bold.woff2") format("woff2"),
                url("https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/woff/FiraCode-Bold.woff") format("woff");
        font-style: bold;
        font-weight: 700;
    }

    .terminal-2008094321-matrix {
        font-family: Fira Code, monospace;
        font-size: 20px;
        line-height: 24.4px;
        font-variant-east-asian: full-width;
    }

    .terminal-2008094321-title {
        font-size: 18px;
        font-weight: bold;
        font-family: arial;
    }

    .terminal-2008094321-r1 { fill: #e3e3dd;font-weight: bold }
.terminal-2008094321-r2 { fill: #656660 }
.terminal-2008094321-r3 { fill: #f8f8f2 }
.terminal-2008094321-r4 { fill: #d9d9d9 }
.terminal-2008094321-r5 { fill: #f92672 }
.terminal-2008094321-r6 { fill: #66d9ef }
    </style>

    <defs>
    <clipPath id="terminal-2008094321-clip-terminal">
      <rect x="0" y="0" width="731.0" height="121.0" />
    </clipPath>
    <clipPath id="terminal-2008094321-line-0">
    <rect x="0" y="1.5" width="732" height="24.65"/>
            </clipPath>
<clipPath id="terminal-2008094321-line-1">
    <rect x="0" y="25.9" width="732" height="24.65"/>
            </clipPath>
<clipPath id="terminal-2008094321-line-2">
    <rect x="0" y="50.3" width="732" height="24.65"/>
            </clipPath>
<clipPath id="terminal-2008094321-line-3">
    <rect x="0" y="74.7" width="732" height="24.65"/>
            </clipPath>
    </defs>

    <rect fill="#0c0c0c" stroke="rgba(255,255,255,0.35)" stroke-width="1" x="1" y="1" width="748" height="170" rx="8"/>
            <g transform="translate(26,22)">
            <circle cx="0" cy="0" r="7" fill="#ff5f57"/>
            <circle cx="22" cy="0" r="7" fill="#febc2e"/>
            <circle cx="44" cy="0" r="7" fill="#28c840"/>
            </g>
        
    <g transform="translate(9, 41)" clip-path="url(#terminal-2008094321-clip-terminal)">
    <rect fill="#272822" x="0" y="1.5" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="24.4" y="1.5" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="48.8" y="1.5" width="12.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="61" y="1.5" width="671" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="0" y="25.9" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="24.4" y="25.9" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="48.8" y="25.9" width="195.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="244" y="25.9" width="12.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="256.2" y="25.9" width="12.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="268.4" y="25.9" width="109.8" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="378.2" y="25.9" width="353.8" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="0" y="50.3" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="24.4" y="50.3" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="48.8" y="50.3" width="73.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="122" y="50.3" width="12.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="134.2" y="50.3" width="48.8" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="183" y="50.3" width="549" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="0" y="74.7" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="24.4" y="74.7" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="48.8" y="74.7" width="12.2" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="61" y="74.7" width="671" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="0" y="99.1" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="24.4" y="99.1" width="24.4" height="24.65" shape-rendering="crispEdges"/><rect fill="#272822" x="48.8" y="99.1" width="683.2" height="24.65" shape-rendering="crispEdges"/>
    <g class="terminal-2008094321-matrix">
    <text class="terminal-2008094321-r2" x="24.4" y="20" textLength="24.4" clip-path="url(#terminal-2008094321-line-0)">1&#160;</text><text class="terminal-2008094321-r3" x="48.8" y="20" textLength="12.2" clip-path="url(#terminal-2008094321-line-0)">{</text><text class="terminal-2008094321-r4" x="732" y="20" textLength="12.2" clip-path="url(#terminal-2008094321-line-0)">
</text><text class="terminal-2008094321-r2" x="24.4" y="44.4" textLength="24.4" clip-path="url(#terminal-2008094321-line-1)">2&#160;</text><text class="terminal-2008094321-r5" x="48.8" y="44.4" textLength="195.2" clip-path="url(#terminal-2008094321-line-1)">&quot;results_folder&quot;</text><text class="terminal-2008094321-r3" x="244" y="44.4" textLength="12.2" clip-path="url(#terminal-2008094321-line-1)">:</text><text class="terminal-2008094321-r5" x="268.4" y="44.4" textLength="109.8" clip-path="url(#terminal-2008094321-line-1)">&quot;results&quot;</text><text class="terminal-2008094321-r4" x="732" y="44.4" textLength="12.2" clip-path="url(#terminal-2008094321-line-1)">
</text><text class="terminal-2008094321-r2" x="24.4" y="68.8" textLength="24.4" clip-path="url(#terminal-2008094321-line-2)">3&#160;</text><text class="terminal-2008094321-r5" x="48.8" y="68.8" textLength="73.2" clip-path="url(#terminal-2008094321-line-2)">&quot;venv&quot;</text><text class="terminal-2008094321-r3" x="122" y="68.8" textLength="12.2" clip-path="url(#terminal-2008094321-line-2)">:</text><text class="terminal-2008094321-r6" x="134.2" y="68.8" textLength="48.8" clip-path="url(#terminal-2008094321-line-2)">true</text><text class="terminal-2008094321-r4" x="732" y="68.8" textLength="12.2" clip-path="url(#terminal-2008094321-line-2)">
</text><text class="terminal-2008094321-r2" x="24.4" y="93.2" textLength="24.4" clip-path="url(#terminal-2008094321-line-3)">4&#160;</text><text class="terminal-2008094321-r3" x="48.8" y="93.2" textLength="12.2" clip-path="url(#terminal-2008094321-line-3)">}</text><text class="terminal-2008094321-r4" x="732" y="93.2" textLength="12.2" clip-path="url(#terminal-2008094321-line-3)">
</text><text class="terminal-2008094321-r2" x="24.4" y="117.6" textLength="24.4" clip-path="url(#terminal-2008094321-line-4)">5&#160;</text><text class="terminal-2008094321-r4" x="732" y="117.6" textLength="12.2" clip-path="url(#terminal-2008094321-line-4)">
</text>
    </g>
    </g>
</svg>

Then the results folder will be `/home/user/project_repo/results`