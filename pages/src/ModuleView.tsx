//import MateModule from "./projects/mate_module";
export default ({ module }: { module: Record<string, any> }) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = module.root_dir;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
  return (
    // <div>
    //   <h1>{module.name}</h1>
    // </div>
    <tr>
      <td>
        <div className="widget-26-job-emp-img">
          <img
            src={module.project.owner.avatar_url}
            style={{ width: "50px", borderRadius: "50%" }}
          />
        </div>
      </td>
      <td style={{ textAlign: "left" }}>
        {module.project.full_name}
      </td>
      <td>
        {module.name}
      </td>
      <td>
        <div className="widget-26-job-info">
          <p className="type m-0">
            Created: {formatter.format(
              new Date(Date.parse(module.project.created_at)),
            )}
          </p>
          <p className="text-muted m-0">
            Updated: {formatter.format(
              new Date(Date.parse(module.project.updated_at)),
            )}
          </p>
        </div>
      </td>
      <td>
        <a href={module.root_dir} target="_blank">Open</a>
      </td>
      <td>
        <button onClick={copyToClipboard} className="btn btn-primary">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4H10C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8Z"
              fill="black"
            />{" "}
            <path
              d="M3 5C3 3.89543 3.89543 3 5 3C5 4.65685 6.34315 6 8 6H10C11.6569 6 13 4.65685 13 3C14.1046 3 15 3.89543 15 5V11H10.4142L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13H15V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V5Z"
              fill="black"
            />{" "}
            <path
              d="M15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15V11Z"
              fill="black"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="widget-26-job-starred starred">
          {module.project.stargazers_count + " "}
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fd8b2c"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              stroke-linejoin="round"
              className="feather feather-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
              </polygon>
            </svg>
          </a>
        </div>
      </td>
    </tr>
  );
};
