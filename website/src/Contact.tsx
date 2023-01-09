// imports bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";

export default () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ListGroup
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "200px",
          marginTop: "20px",
        }}
      >
        <ListGroup.Item>
          <a href="mailto:g.zani@uva.nl">mail</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://github.com/salamanderxing">GitHub</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.superprof.it/magistrale-intelligenza-artificiale-offre-lezioni-aiuto-progetti-python-machine-learning-deep-learning.html">
            Superprof
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
