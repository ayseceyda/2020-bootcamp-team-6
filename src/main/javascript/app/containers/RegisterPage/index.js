import React, { Component } from 'react';
import {
    Container
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import TabComponent from './components/tabs/tabs.js';
import NavBarComponent from '../../components/navbar/navbar';
import PersonalInfo from './components/tabs/personal-info.js';
import Footer from '../../components/Footer/Footer.jsx';
export default class RegisterPage extends Component {

    render() {
        const registerStyle = {
            padding: "2%",
            width: "100%",
            backgroundColor: "#e4dbd9",
            margin: "0% 0% 0% 15%",
            backgroundColor: "#f9ebee",
            opacity: "0.9",
          }
       

        return (
            <React.Fragment>
            <NavbarComponent/>
        <Container style={registerStyle}>
           <div><p>WELCOME TO REGISTRATION!</p></div>
           <PersonalInfo/>
            </Container>
            <Footer/>
            </React.Fragment>   
        );
    }
}

