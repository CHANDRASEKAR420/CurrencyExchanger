import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MainNavbar() {
  
  const admin = true; 
   // This can be set based on your authentication logic

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
       {admin?<Navbar.Brand as={NavLink} to="/">🏦 COiNDEXiN</Navbar.Brand>:<Navbar.Brand as={NavLink} to="/">🏦 NammaBank</Navbar.Brand>} 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/exchange">Exchange</Nav.Link>
            <Nav.Link as={NavLink} to="/wallet">Wallet</Nav.Link>
            <Nav.Link as={NavLink} to="/account">Account</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
