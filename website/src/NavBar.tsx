import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import CLI from "./CLI";
import Config from "./Config"
import Project from "./Project"
import Runtime from "./Runtime"
import './index.css'
import { useState, createRef } from "react";

// imports Link from react-router-dom
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

function BasicExample() {
  const [expanded, setExpanded] = useState(false);
  // defines a reference to the NavBar Toggle button
  const navBarToggleRef = createRef<HTMLButtonElement>();
  const unsetExpanded = () => {
    if (expanded) {
      navBarToggleRef.current?.click();
    }
  };
  // "Mate Project": "project",
  //       "Mate CLI": "cli",
  //       "Runtime": "mate",
  //       "Configuration": "config",
        // "Tutorials": "tutorials",
  
  return (
    <BrowserRouter>
      <Navbar
        expand="lg"
        className="sticky-top"
        style={{width:'100vw', margin:0, background: '#5f8d4e', borderBottom:"1px solid #285430"}}
      >
        <div className="container"
        style={{width:'100vw', margin:0}}
        >
          <Navbar.Brand
            onClick={unsetExpanded}
            as={Link}
            to="/"
          >
            Mate
          </Navbar.Brand>
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
              {/* <Nav.Link
              //   style={{ color: "white" }}
              //   onClick={unsetExpanded}
              //   as={Link}
              //   to="/contact"
              // >
              //   Tutorials 
              // </Nav.Link>
              */}
              <NavDropdown title="Documentation" id="basic-nav-dropdown" >
                <NavDropdown.Item onClick={unsetExpanded} as={Link} to="/mate_project">Mate Project</NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded} as={Link} to="/mate_cli">Mate CLI</NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded} as={Link} to="/mate_runtime">Mate Runtime</NavDropdown.Item>
                <NavDropdown.Item onClick={unsetExpanded} as={Link} to="/mate_config">Project Configuration</NavDropdown.Item>
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
      <div className="container" style={{background:'#5f8d4e'}}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/mate_project" element={<Project />} />
          <Route path="/mate_cli" element={<CLI/>} />
          <Route path="/mate_runtime" element={<Runtime />} />
          <Route path="/mate_config" element={<Config />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default BasicExample;
