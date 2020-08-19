import React, { Component } from 'react';
import {
    Container, Form, Button, Col
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import axios from 'axios';
import './components/styles/style.css';
import AuthView from "../../components/AuthView";
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event){
        const{username, password} = this.state;

    axios
    .post(
        "http://localhost:3000/user",
        {
            user:{
                username: username,
                password: password
            }
        },
        { withCredentials: true }
    )
    .then(reponse => {
        console.log("res from login", reponse);
    })
    .catch(error =>{
        console.log("login error", error);
    });
    event.preventDefault();

}


    render() {
       
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
                        <form onSubmit = {this.handleSubmit}>
                            <h1 className="text-left header" > SIGN IN! </h1>
                            <p>We're happy to see you return! Please sign in to continue!
                            </p>
                            <div className="form-group" >
                                <br></br>
                                <br></br>
                                <label > Username </label>
                                <input className="form-control" name= "username" placeholder= "Username" type="text" 
                                value = {this.state.username}
                                onChange = {this.handleChange}
                                required />
                            </div>
                            <div className="form-group">
                                <label > Password </label> <input type="password" className="form-control" 
                                name="password"
                                placeholder = "Password"
                                value = {this.state.password}
                                onChange = {this.handleChange}
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
                                <Link to = '/admin' className="btn btn-primary" style = {buttonstylelogin}> Sign Up</Link>
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

