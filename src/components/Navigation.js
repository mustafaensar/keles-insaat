import React from 'react'
import logo from '../img/logo192.png'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar className='header d-flex align-items-center' fixed='top' expand="lg">
        <Container className='row'>
          <Navbar.Brand href="/" className="col-10 logo d-flex align-items-center justify-content-start me-auto me-lg-auto">

            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src={logo} alt="" className='' />
            <h1 className=''>Website Name</h1>

          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light col-2' />
          <Navbar.Collapse id="basic-navbar-nav" className='bg-black col-2'>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/gallery'>Photos</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*
          <Navbar collapseOnSelect fixed='top' expand='sm'>
            <Container>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                  <Nav.Link href="/">ANA SAYFA</Nav.Link>
                  <Nav.Link href='/about'>HAKKIMIZDA</Nav.Link>
                  <Nav.Link href='/gallery'>FOTOĞRAFLAR</Nav.Link>
                  <Nav.Link href='/contact'>İLETİŞİM</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          
        
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="/">ANA SAYFA</a></li>
              <li><a href="/about">HAKKIMIZDA</a></li>
              <li><a href="/gallery">FOTOĞRAFLAR</a></li>
              <li><a href="/contact">İLETİŞİM</a></li>
            </ul>
          </nav>{/* .navbar*
          
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        */}

    </>
  )
}
