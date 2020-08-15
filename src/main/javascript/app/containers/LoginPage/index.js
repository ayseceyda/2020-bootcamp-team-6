import React, { Component } from 'react';
import {
    Container, Form, Button, Col
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import axios from 'axios';
import './components/styles/style.css';

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
            width: "40%",
            margin: "4% 30% 0%",
            backgroundColor: "#e4dbd9",
            opacity: 0.8,
            padding: "40px",
            width: "400px",
            margin: "50px 350px 300px",
            backgroundColor: "#f9ebee",
            opacity: "0.9",
          }
          const buttonstylelogin = {
            margin: "0% -50% 0% 77%",
          }

          const bodystyle ={
            backgroundImage: "url('https://i.hizliresim.com/X5WbVZ.jpg')",
          }

        return (
        
                <div style = {bodystyle}>
                <NavbarComponent />
                <Container >

               <div style={loginstyle}>
                        <form onSubmit = {this.handleSubmit}>
                            <h1 className="text-center header" > Login </h1>
                            <div className="form-group" >
                                <label > Username </label>
                                <input className="form-control" placeholder= "Username" type="text" 
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
                            <div className="text-center" >
                                <button className="btn btn-success" style = {buttonstylelogin}>  Login </button>
                                <br /><br />
                                <button className="btn btn-success" style = {buttonstylelogin}> Sign Up </button>
                            </div> </form> 

                            </div>
                </Container>
                </div>
        );
    }
}

