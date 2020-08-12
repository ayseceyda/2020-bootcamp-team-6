import React, { Component } from 'react';
import {
    Container
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';

export default class LoginPage extends Component {
    
    render() {
        return (
            <React.Fragment >
                <NavbarComponent />
                <Container>
                    <div className="container" >
                        <form >
                            <h1 className="text-center header" > Login </h1>
                            <div className="form-group" >
                                <label > Username </label>
                                <input className="form-control" />
                            </div>
                            <div className="form-group" >
                                <label > Password </label> <input type="password" className="form-control" />
                            </div>
                            <div className="text-center" >
                                <button className="btn btn-success" > Login </button>
                                <br /><br />
                                <button className="btn btn-success" > Sign Up </button>
                            </div> </form> </div >
                </Container>
            </React.Fragment>
        );
    }
}