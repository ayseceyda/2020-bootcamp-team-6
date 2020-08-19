import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import {
	Container,
    Table,
    Card,
	
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import ListAnimalComponent from './components/ListAnimalComponent';
import ListUserComponent from './components/ListUserComponent';
export default class AdminPage extends Component{
   
    render(){


        return(
            <React.Fragment>
                <NavbarComponent/>
                    <h2 className = "h2-textstyle">
                    Welcome the Admin Page!</h2><br></br>
                                <p>User Table</p><br></br>
                                <ListUserComponent/>
                                <p>Animal Table</p><br></br>
                                <ListAnimalComponent/>
                            <p>Comments Table</p>
                  

 <Footer/>

            </React.Fragment>
        );
    }
}
