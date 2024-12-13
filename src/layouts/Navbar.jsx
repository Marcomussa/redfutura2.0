import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from "../public/images/redfutura-logo-nav.webp"

function NavbarComponent() {
  return (
    <Navbar className='border-bottom py-3 sticky-top bg-white' expand="lg">
      <Container className='d-flex justify-content-between ps-5 m-0'>
        <Link> <img src={Logo} alt="Logo" width={200} /></Link>

        <Navbar.Toggle aria-controls="navbar-nav"/>

        <Navbar.Collapse className='navbar-collapse' id="navbar-nav">
          <Nav className='d-flex  main-text nav-size'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Integrantes</Nav.Link>
            <Nav.Link>Proveedores</Nav.Link>
            <Nav.Link>Productos</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent