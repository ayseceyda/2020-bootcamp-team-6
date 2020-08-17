import React, { Component } from 'react';




import {
    Navbar,
    Nav,
    NavDropdown,
    Image,
    Container,
    Col,
    Row
} from 'react-bootstrap';

export default class NavbarComponent extends Component {
    
    render() {
        return (
      
     
    <Navbar  bg="light" expand="md" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <a href="/">
                            <Image src="https://i.hizliresim.com/qKXQ6d.png" />
                            </a>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="mr-left">
                            <NavDropdown title="Account" id="basic-nav-dropdown" drop="left">
                                <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
<NavDropdown.Item href="/account-settings" >Account Settings</NavDropdown.Item>
<NavDropdown.Item href="/register" >Sign Up</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
   
             
           
        );
    }
}