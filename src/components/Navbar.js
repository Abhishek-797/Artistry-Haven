// Navbar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        <img
          src={logo}
          alt="logo"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Gallery" className="nav-link">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
