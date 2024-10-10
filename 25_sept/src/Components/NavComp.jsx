import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';

function NavComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand className="text-white">
          <NavLink to="/" className="text-white text-decoration-none">Keep An Eye</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/cart" className="text-white d-flex align-items-center text-decoration-none">
              <i className="bi bi-cart4 icon me-1"></i>
              <span>Cart</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
