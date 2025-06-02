// src/components/Navbar.js
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">COINDEXIN</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#exchange">EXCHANGE</Nav.Link>
            <Nav.Link href="#wallet">WALLET</Nav.Link>
            <Nav.Link href="#account">ACCOUNT</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
