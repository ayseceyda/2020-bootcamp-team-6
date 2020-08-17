import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import FormComponent from './components/form/form.js';
import MapContainer from './components/google-map/google-map';
import Footer from '../../components/Footer/Footer.jsx';
export default class ContactPage extends Component {

    render() {
        return (
            <React.Fragment >
            <NavbarComponent />
            <FormComponent/> 
           <Container>
           
           </Container>     
           <Footer/>
        </React.Fragment>
        );
    }
}