import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/"> 
          <FontAwesomeIcon icon={faBook} style={{color: "#000000",}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register" className="nav-link">
                Sign-Up
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" className="nav-link">
                Sign-In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };
    


export default NavBar