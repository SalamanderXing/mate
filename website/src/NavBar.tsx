import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "react-bootstrap/NavItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import merged from "./merged.json";
import React, { useState, createRef } from "react";

function Basic() {
  return;
}

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [route, setRoute] = useState<string>("Mate");
  // defines a reference to the NavBar Toggle button
  const navBarToggleRef = createRef<HTMLButtonElement>();
  const unsetExpanded = (event: React.MouseEvent<HTMLElement>) => {
    if (expanded) {
      navBarToggleRef.current?.click();
    }
    // checks the value of the target
    // @ts-ignore
    setRoute(event.target.innerText);
  };
  const routes = {
    Mate: <div dangerouslySetInnerHTML={{ __html: merged["index"] }} />,
    "Mate Project": (
      <div dangerouslySetInnerHTML={{ __html: merged["project"] }} />
    ),
    "Mate CLI": <div dangerouslySetInnerHTML={{ __html: merged["cli"] }} />,
    "Mate Runtime": (
      <div dangerouslySetInnerHTML={{ __html: merged["mate"] }} />
    ),
    "Project Configuration": (
      <div dangerouslySetInnerHTML={{ __html: merged["config"] }} />
    ),
    "Mate project from scratch": (
      <div dangerouslySetInnerHTML={{ __html: merged["mate_project_from_scratch"] }} />
    ),
  } as Record<string,JSX.Element> ;
  routes['GitHub'] = routes["Mate"]
  routes["MateHub"] = routes["Mate"]
  return (
    <>
      <Navbar
        expand="lg"
        className="sticky-top"
        style={{
          width: "100%",
          margin: 0,
          background: "#5f8d4e",
          borderBottom: "1px solid #285430",
          color: "black",
        }}
      >
        <div className="container" style={{ margin: 0 }}>
          <Navbar.Brand onClick={unsetExpanded}>Mate</Navbar.Brand>
          <Navbar.Toggle
            ref={navBarToggleRef}
            aria-controls="basic-navbar-nav"
            className={`${!expanded ? "" : "collapse"}`}
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${!expanded ? "" : "show"}`}
            style={{ color: "black" }}
          >
            <Nav className="me-auto">
              <NavDropdown
                style={{ color: "black",background:"#5f8d4e" }}
                title="Documentation"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  style={{ color: "black", background:"#5f8d4e"}}
                  onClick={unsetExpanded}
                >
                  Mate Project
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}

                  style={{ color: "black", background:"#5f8d4e"}}
                >
                  Mate CLI
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}
                  style={{ color: "black", background:"#5f8d4e"}}
                >
                  Mate Runtime
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}
                  style={{ color: "black", background:"#5f8d4e"}}
                >
                  Project Configuration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ color: "black" }}
                title="Tutorials"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  style={{ color: "black", background:"#5f8d4e"}}
                  onClick={unsetExpanded}
                >
                Mate project from scratch 
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link
                onClick={unsetExpanded}
                href="https://salamanderxing.github.io/matehub/"
                target="_blank"
              >
                MateHub
              </Nav.Link>
              <Nav.Link
                onClick={unsetExpanded}
                href="https://github.com/salamanderxing/mate"
                target="_blank"
              >
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div
        className="container"
        style={{
          maxWidth: 800,
          paddingTop: "20px",
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingBottom: "50px",
          borderBottomRightRadius: "50px",
          borderBottomLeftRadius: "50px",
          background: "#5f8d4e",
          color: "black",
        }}
      >
        {routes[route]}
      </div>
    </>
  );
}

export default BasicExample;
