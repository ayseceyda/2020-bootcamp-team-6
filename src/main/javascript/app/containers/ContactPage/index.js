import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import MapContainer from './components/google-map/google-map';
import FormComponent from './components/form/form.js';
export default class ContactPage extends Component {

    render() {
        return (
            <React.Fragment >
            <NavbarComponent />
           <Container>
            <MapContainer/>

            <FormComponent/>
           </Container>
          
        
                     
         
        </React.Fragment>
        );
    }
}