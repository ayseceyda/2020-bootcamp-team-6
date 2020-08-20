import React, { Component } from 'react';
import {
    Container, Form, Button, Col, Nav, NavDropdown
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import axios from 'axios';
import './components/styles/style.css';
import AuthView from "../../components/AuthView";
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";

export default class LoginPage extends Component {
    constructor(props){
        super(props);
            let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const{username, password} = this.state

        if(username == "root" && password == "root"){
            global.loggedIn = true;
            this.setState({
                loggedIn: true
            })
        }
    }


    render() {

        if(this.state.loggedIn){
            return<Redirect to= "/account-settings"/> 

        }
       
        const loginstyle = {
            padding: "8%",
            width: "59%",
            height: "80%",
            backgroundColor: "#e4dbd9",
            margin: "0% 0% 0% 59.5%",
            backgroundColor: "#f9ebee",
            opacity: "0.8",
          }
          const buttonstylelogin = {
            margin: "-0,5% 0% 0% 70%",
            align: "center",
            width: "60%",
          }

          const bodystyle ={
            
          }

        return (

                <div style = {bodystyle}>
                <NavbarComponent />
                <Container >

               <div style={loginstyle}>
                        <form onSubmit = {this.submitForm}>
                            <h1 className="text-left header" > SIGN IN! </h1>
                            <p>We're happy to see you return! Please sign in to continue!
                            </p>
                            <div className="form-group" >
                                <br></br>
                                <br></br>
                                <label > Username </label>
                                <input className="form-control" name= "username" placeholder= "Username" type="text" 
                                value={this.state.username}
                                onChange={this.onChange}
                                required />
                            </div>
                            <div className="form-group">
                                <label > Password </label> <input type="password" className="form-control" 
                                name="password"
                                placeholder = "Password"
                               value={this.state.password}
                               onChange={this.onChange}
                                required/>
                            </div>
                            <br></br>
                                <br></br>
                                
                            <div className="text-center" >
                                <button className="btn btn-success" style = {buttonstylelogin}>  Sign In</button>
                                <br /><br />
                                <br></br>
                                <br></br>
                                <p>Don't you have an account? Then sign up!</p>
                                <Link to = '/register' className="btn btn-primary" style = {buttonstylelogin}> Sign Up</Link>
                            </div> 
                                <br></br>
                                <br></br>
                                </form> 

                            </div>
                </Container>
                </div>
        );
    }
}

