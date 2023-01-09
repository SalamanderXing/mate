// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

interface Project {
  name: string;
  description: string;
  link: string;
}

function DefaultExample() {
  const projects: Project[] = [
    {
      name: "Mate",
      description: "Next gen deep learning framework",
      link: "https://github.com/salamanderxing/mate",
    },
    {
      name: "Stochastic Hopfield Network",
      description: "Online Stochastic Hopfield Network in JavaScript",
      link: "https://salamanderxing.github.io/hopfield-network/",
    },
    {
      name: "Cannon",
      description: "Play online agains an AI",
      link: "https://salamanderxing.github.io/cannon/",
    },
    {
      name: "Focus",
      description: "Test your focus",
      link: "https://salamanderxing.github.io/focus/",
    },
    {
      name: "MCS",
      description: "Computes the maximum common subgraph of two graphs",
      link: "https://github.com/salamanderxing/mcs",
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <ListGroup
        as="ol"
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 500,
        }}
      >
        {projects.map((project, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div
              className="ms-2 me-auto"
              style={{ textAlign: "center", width: "100%" }}
            >
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div className="fw-bold">{project.name}</div>
                {project.description}
              </div>
            </div>
            {/* inserts the link to the project */}
            <a
              href={project.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Badge bg="primary">Link</Badge>
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default DefaultExample;
