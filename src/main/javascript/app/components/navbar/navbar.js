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

import AuthView from '../AuthView';
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
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <AuthView />
                    </Navbar.Collapse>
                </Navbar>
   
             
           
        );
    }
}