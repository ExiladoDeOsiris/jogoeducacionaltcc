import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <Container className="grid">
        <Navbar expand="" style={{ backgroundColor: "#fff" }}>
          <Navbar.Brand className="">
            <img src={logo} alt="jaguar" style={{ width: "25%" }} />
          </Navbar.Brand>
        </Navbar>
        <Navbar variant="" style={{ backgroundColor: "#d9d8d8" }} expand="sm">
          <Navbar.Toggle />

          <Navbar.Collapse className="nav justify-content-center">
            <Nav>
              <Nav.Link as={Link} to="/">
                INÍCIO
              </Nav.Link>
              <Nav.Link as={Link} to="/selecao">
                SELEÇÃO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
