import React, { Component } from 'react';
import {
    Container
} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import axios from 'axios';


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
            padding: "40px",
            width: "400px",
            margin: "50px 350px 300px",
            backgroundColor: "#e4dbd9",
          };

          const buttonstylelogin = {
            margin: "0px -250px 0px -30px",
          }

        return (
            <React.Fragment >
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
            </React.Fragment>
        );
    }
}