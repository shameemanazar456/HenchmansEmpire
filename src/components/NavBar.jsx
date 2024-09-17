import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className='w-100 px-5'>
      <Navbar.Brand href="#home">
      <img
              src="https://img.freepik.com/premium-photo/spinning-red-lightning-bolt-logo-encircled-darkness-minimalist-design_983420-6232.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        <span className='text-danger '><i><b>HenchMan's Empire</b></i></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link ><Link to={'/'}  style={{textDecoration:'none', color:'white'}}>Home</Link></Nav.Link>
        <Nav.Link ><Link to={'/AboutUs'}  style={{textDecoration:'none', color:'white'}}>AboutUs</Link></Nav.Link>
       <Nav.Link><Link to={'/ComplaintRegistration'}  style={{textDecoration:'none', color:'white'}}>Grievance Form</Link></Nav.Link>
      </Nav>
      </Navbar.Collapse>
      
  </Navbar>
  )
}

export default NavBar
