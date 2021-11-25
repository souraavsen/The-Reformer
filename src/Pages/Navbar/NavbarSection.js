import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../Images/logo.png'
import './Navbar.css'

const NavbarSection = () => {
  return (
    <Navbar className='py-1 mx-0' bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand className='brand-logo md:ml-16'>
        <img src={logo} width='30px' alt='' />
      </Navbar.Brand>
      <Nav className='brand-name'>
        <Nav.Link className='text-white'>The Reformer</Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link className='text-color ml-6 text-white font-semibold'>
            Workout
          </Nav.Link>
          <Nav.Link className='text-color ml-6 text-white font-semibold'>
            About
          </Nav.Link>
          <Nav.Link className='text-color ml-6 text-white font-semibold'>
            <i class='far fa-user-circle'></i>
          </Nav.Link>
          <Nav.Link className='text-color ml-6'>
            <i class='fas fa-shopping-cart text-white font-semibold'></i>
            <span className='text-white text-xs absolute top-1 px-1'>2</span>
          </Nav.Link>
          <Nav.Link className='text-color px-4 ml-6 text-white font-semibold bg-blue-600'>
            Shop Now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarSection;
