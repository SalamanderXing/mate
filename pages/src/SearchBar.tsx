import "./SearchBar.css";
import ModuleView from "./ModuleView";
import { useEffect, useState } from "react";

export default () => {
  const componentTypes = ["models", "trainers", "data_loaders"];
  const [selectedProjects, setSelectedProjects] = useState(
    {} as Record<string, Record<string, any>>
  );
  const [components, setComponents] = useState({
    data_loaders: [],
    models: [],
    trainers: [],
    experiments: [],
  } as Record<string, Record<string, any>[]>);
  const [dependencies, changeDedendencies] = useState<string[]>([]);
  const [selectedComponents, setSelectedComponents] = useState(
    [] as Record<string, any>
  );
  useEffect(() => {
    (async () => {
      const tmpComponents = Object.fromEntries(
        Object.entries(components).map(([e, v]) => [e, {}])
      ) as Record<string, Record<string, any>>;
      //const proto = await fetch("./items.json");
      const proto = await fetch(
        "https://api.github.com/search/repositories?q=builtwithmate+in:readme"
      );
      const projects = (await proto.json()).items as Record<string, any>;
      const projectsWithUrl = projects.map((x: Record<string, any>) => {
        return {
          ...x,
          projects_url: `https://raw.githubusercontent.com/${x.full_name}/main/.mate/projects.json`,
        };
      });
      for await (const projectWithUrl of projectsWithUrl) {
        const result = await fetch(projectWithUrl["projects_url"]);
        const resultJson = (await result.json()) as Record<
          string,
          Record<string, Record<string, Record<string, Record<string, string>>>>
        >;
        for await (const mateProjectStructure of Object.values(resultJson)) {
          for await (const [moduleType, modules] of Object.entries(
            mateProjectStructure["project"]
          )) {
            for await (const mateModule of Object.values(modules)) {
              const moduleId =
                moduleType + mateModule["name"] + projectWithUrl["full_name"];
              tmpComponents[moduleType as string][moduleId as string] = {
                ...(mateModule as Record<string, any>),
                project: projectWithUrl as Record<string, any>,
                root_dir: `${projectWithUrl.html_url}/tree/main${mateProjectStructure["root"]}/${moduleType}/${mateModule["name"]}`,
              };
            }
          }
        }
      }
      setComponents(
        Object.fromEntries(
          Object.entries(tmpComponents).map(([e, v]) => [e, Object.values(v)])
        )
      );
    })();
  }, []);
  const search = () => {
    const select = document.getElementById("exampleFormControlSelect1")
    if (select !== null){
      const componentType = (
         select as HTMLInputElement
      ).value;
      const valuesType = components[componentType];
      const isSubSet = (target: [string, string][]): boolean => {
        const s2 = target.map((x) => x[0]);
        console.log({s2})
        console.log({dependencies})
        const result = dependencies.every(x => s2.includes(x));
        return result
      };
      const selectedValues = valuesType.filter((x) =>
        "dependencies" in x
          ? isSubSet(x["dependencies"] as [string, string][])
          : false
      );
      if (JSON.stringify(selectedValues) !== JSON.stringify(selectedComponents)){
        setSelectedComponents(selectedValues);
      }
    }
  };
  search()

  const handleAddTag = () => {
    const input = document.getElementById('dep') as HTMLInputElement
    const inputValue = input.value
    if (inputValue.trim() !== "") {
      input.value = ""
      changeDedendencies([...dependencies, inputValue]);
    }
  };

  const handleRemoveTag = (index: number) => {
    changeDedendencies(dependencies.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/*
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
      */}
      <div
        className="input-group input-group-lg noselect"
        style={{
          borderColor: "#5f8d4e",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5px",
          marginTop: "30px",
          //borderRadius: "50%",
          color: "#000",
        }}
      >
        <div
          className="input-group-prepend input-group-lg"
          style={{ borderRadius: "30px" }}
        >
          <span
            style={{
              borderRadius: "30px 0 0 30px",
              background: "#5F8D4E",
              borderColor: "#285430",
            }}
            className="input-group-text"
          >
            Type
          </span>
        </div>
        <div className="input-group-lg" style={{ borderRadius: "0 0 0 0" }}>
          <select
            className="form-select form-select-lg noselect"
            onChange={search}
            style={{
              maxWidth: "150px",
              background: "#5F8D4E",
              borderColor: "#285430",
              borderRadius: "0 0 0 0",
            }}
            id="exampleFormControlSelect1"
          >
            {componentTypes.map((m, i) => (
              <option
                className="noselect"
                style={{ borderRadius: "0 0 0 0" }}
                key={i.toString()}
              >
                {m}
              </option>
            ))}
          </select>
        </div>
        {/*<TagInput tags={tags} onChange={changeTags} />*/}
        <span
          className="input-group-text input-group-prepend"
          style={{
            borderRadius: "0 0 0 0",
            background: "#5F8D4E",
            borderColor: "#285430",
          }}
          onClick={handleAddTag}
        >
          Add Dependency
        </span>

        <input
          type="text"
          id='dep'
          onKeyDown={handleKeyDown}
          className="form-control"
          style={{
            borderRadius: "0 30px 30px 0",
            maxWidth: "150px",
            background: "#5F8D4E",
            borderColor: "#285430",
          }}
        />
      </div>
      <div>
        {dependencies.map((tag, index) => (
          <span>
            <span
              className="badge badge-pill badge-primary"
              style={{ border: "1px solid", margin: "1px" }}
              key={index}
            >
              {tag}
              <button
                className="btn btn-sm p-0"
                style={{
                  marginLeft: "3px",
                  marginTop: "0",
                  marginBottom: "3px",
                }}
                onClick={() => handleRemoveTag(index)}
              >
                x
              </button>
            </span>
          </span>
        ))}
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
                              {selectedComponents.map(
                                (c: Record<string, any>) =>
                                  ModuleView({ module: c })
                              )}
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
