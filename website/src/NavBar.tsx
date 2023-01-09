import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        {
          {
            Mate: <div dangerouslySetInnerHTML={{ __html: merged["index"] }} />,
            "Mate Project": (
              <div dangerouslySetInnerHTML={{ __html: merged["project"] }} />
            ),
            "Mate CLI": (
              <div dangerouslySetInnerHTML={{ __html: merged["cli"] }} />
            ),
            "Mate Runtime": (
              <div dangerouslySetInnerHTML={{ __html: merged["mate"] }} />
            ),
            "Project Configuration": (
              <div dangerouslySetInnerHTML={{ __html: merged["config"] }} />
            ),
          }[route]
        }
      </div>
    </>
  );
}

export default BasicExample;
