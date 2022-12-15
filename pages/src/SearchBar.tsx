import "./SearchBar.css";
import ModuleView from "./ModuleView";
import { useEffect, useState } from "react";

export default () => {
  const [selectedProjects, setSelectedProjects] = useState(
    {} as Record<string, Record<string, any>>,
  );
  const [components, setComponents] = useState({
    "data_loaders": [],
    "models": [],
    "trainers": [],
    "experiments": [],
  } as Record<string, Record<string, any>[]>);
  const [selectedComponents, setSelectedComponents] = useState(
    [] as Record<string, any>,
  );
  useEffect(() => {
    (async () => {
      const tmpComponents = Object.fromEntries(
        Object.entries(components).map(([e, v]) => [e, {}]),
      ) as Record<string, Record<string, any>>;
      //const proto = await fetch("./items.json");
      const proto = await fetch(
        "https://api.github.com/search/repositories?q=builtwithmate+in:readme",
      );
      const projects = (await proto.json()).items as Record<string, any>;
      const projectsWithUrl = projects.map((x: Record<string, any>) => {
        return {
          ...x,
          projects_url:
            `https://raw.githubusercontent.com/${x.full_name}/main/.mate/projects.json`,
        };
      });
      for await (const projectWithUrl of projectsWithUrl) {
        console.log(projectWithUrl["full_name"]);
        const result = await fetch(projectWithUrl["projects_url"]);
        const resultJson = (await result.json()) as Record<
          string,
          Record<string, Record<string, Record<string, Record<string, string>>>>
        >;
        for await (
          const mateProjectStructure of Object.values(
            resultJson,
          )
        ) {
          console.log(mateProjectStructure["name"]);
          for await (
            const [moduleType, modules] of Object.entries(
              mateProjectStructure["project"],
            )
          ) {
            console.log(moduleType);
            for await (const mateModule of Object.values(modules)) {
              const moduleId = moduleType + mateModule["name"] +
                projectWithUrl["full_name"];
              tmpComponents[moduleType as string][moduleId as string] = {
                ...mateModule as Record<string, any>,
                project: projectWithUrl as Record<string, any>,
                root_dir: `${projectWithUrl.html_url}/tree/main${
                  mateProjectStructure["root"]
                }/${moduleType}/${mateModule["name"]}`,
              };
            }
          }
        }
      }
      setComponents(
        Object.fromEntries(
          Object.entries(tmpComponents).map(([e, v]) => [e, Object.values(v)]),
        ),
      );
      // execute the above code but only once
      // for (const [projectName, vals] of Object.entries(selectedProjects)) {
      //   for (const [key, val] of Object.entries(vals["project"])) {
      //     for (
      //       const [k, v] of Object.entries(
      //         val as Record<string, Record<string, string>>,
      //       )
      //     ) {
      //       components[key as string][v["name"]] = v;
      //     }
      //   }
      // }
    })();
  }, []);
  //https://raw.githubusercontent.com/SalamanderXing/jax-anomaly-detection/main/.mate/projects.json
  console.log(components);
  // fetch("https://api.github.com/search/repositories?q=builtwithmate+in:readme")
  //   .then((r) => r.json())
  //   .then((data) => {
  //     //data.items.map(item => )
  //   });
  //
  const componentTypes = [
    "models",
    "trainers",
    "data_loaders",
  ];
  const search = () => {
    const componentType =
      (document.getElementById("exampleFormControlSelect1") as HTMLInputElement)
        .value;
    const valuesType = components[componentType];
    setSelectedComponents(valuesType);
    //const query = document.getElementById("search")?.value;
    // const results = projects.flatMap((p) => p.modules).filter((m) =>
    //   m.type === componentType
    // );
    // setSelectedComponents(results);
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/*createsa an img*/}
      <img
        style={{
          background: "url(logo.jpeg)",
          width: "450px",
          height: "450px",
          objectFit: "cover",
          backgroundPosition: "5% bottom",
          scale: "0.5",
          borderRadius: "50%",
          marginTop: "-100px",
          marginBottom: "-100px",
        }}
      />
      <div
        className="input-group input-group-lg"
        style={{
          borderColor: "#5f8d4e",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
          color: "#000",
        }}
      >
        <select
          className="form-select form-select-lg"
          style={{
            maxWidth: "150px",
            background: "#5F8D4E",
            borderColor: "#5f8d4e",
          }}
          id="exampleFormControlSelect1"
        >
          {componentTypes.map((m, i) => <option key={i.toString()}>{m}
          </option>)}
        </select>
        <input
          type="text"
          style={{
            background: "#5F8D4E",
            borderColor: "#5f8d4e",
            color: "#000",
          }}
          className="form-control form-control-lg"
          id="search"
          name="search"
        />
        <button
          className="btn btn-success btn-lg"
          onClick={search}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65">
            </line>
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="card card-margin"
              style={{
                background: "#A4BE7B",
                display: selectedComponents.length > 0 ? "block" : "none",
              }}
            >
              <div
                className="card-body"
                style={{
                  minHeight: "0",
                  display: selectedComponents.length > 0 ? "block" : "none",
                }}
              >
                <div className="row search-body">
                  <div className="col-lg-12">
                    <div className="search-result">
                      <div className="result-body">
                        <div className="table-responsive">
                          <table style={{ width: "100%" }}>
                            <tbody
                              className="widget-26"
                              style={{ width: "100%" }}
                            >
                              {selectedComponents.map((
                                c: Record<string, any>,
                              ) => ModuleView({ module: c }))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
