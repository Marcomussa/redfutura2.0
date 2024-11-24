import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from "../public/images/redfutura-logo-nav.webp"

function NavbarComponent() {
  return (
    <Navbar className='border-bottom py-3 sticky-top bg-white' expand="lg">
      <Container className='d-flex justify-content-between px-5 m-0'>
        <Link> <img src={Logo} alt="Logo" width={200} /></Link>

        <Nav className='d-flex gap-5 main-text'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Integrantes</Nav.Link>
            <Nav.Link>Proveedores</Nav.Link>
            <Nav.Link>Productos</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent