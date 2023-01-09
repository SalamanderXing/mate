import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import CLI from "./CLI";
import Config from "./Config";
import Project from "./Project";
import Runtime from "./Runtime";
import "./index.css";
import React, { useState, createRef } from "react";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  const [route, setRoute] = useState<string>("Mate");
  // defines a reference to the NavBar Toggle button
  const navBarToggleRef = createRef<HTMLButtonElement>();
  const unsetExpanded = (event:React.MouseEvent<HTMLElement>) => {
    if (expanded) {
      navBarToggleRef.current?.click();
    }
    // checks the value of the target
    // @ts-ignore
    setRoute(event.target.innerText);
  };
  
  return (
    <>
      <Navbar
        expand="lg"
        className="sticky-top"
        style={{
          width: "100vw",
          margin: 0,
          background: "#5f8d4e",
          borderBottom: "1px solid #285430",
        }}
      >
        <div className="container" style={{ width: "100vw", margin: 0 }}>
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
          >
            <Nav className="me-auto">
              <NavDropdown title="Documentation" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={unsetExpanded}>
                  Mate Project
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}>
                  Mate CLI
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}>
                  Mate Runtime
                </NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded}>
                  Project Configuration
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={unsetExpanded}
                href="https://salamanderxing.github.io/matehub/"
              >
                MateHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="container" style={{ background: "#5f8d4e" }}>
          {{
            "Mate": <About />,
            "Mate Project": <Project />,
            "Mate CLI": <CLI />,
            "Mate Runtime": <Runtime />,
            "Project Configuration": <Config />,
          }[route]
          }
      </div>
    </>
  );
}

export default BasicExample;
