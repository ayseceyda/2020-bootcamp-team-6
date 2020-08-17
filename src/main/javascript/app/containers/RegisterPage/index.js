import React, { Component } from 'react';
import {
    Container
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import TabComponent from './components/tabs/tabs.js';
import NavBarComponent from '../../components/navbar/navbar';
export default class RegisterPage extends Component {
   


    render() {
        const registerStyle = {
            padding: "2%",
            width: "40%",
            backgroundColor: "#e4dbd9",
            margin: "3% 0% 0% 28.5%",
            backgroundColor: "#f9ebee",
            opacity: "0.8",
           
          }
       

        return (
            <React.Fragment>
            <NavbarComponent/>
        <Container style={registerStyle}>
           
           <TabComponent/>
            </Container>
            </React.Fragment>   
        );
    }
}

