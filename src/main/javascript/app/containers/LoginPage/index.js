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
            opacity: 0.8
          };
          const buttonstylelogin = {
            margin: "0% -50% 0% 77%",
          }

        return (
        <React.Fragment>
            <NavbarComponent />
          <Container style={loginstyle}>
  
                    <Form  >
                <Form.Group >
			  <Form.Label>USER NAME</Form.Label>
			  <Form.Control type="text" placeholder="" />
			</Form.Group>
		   <Form.Group >
           <Form.Control type="password" placeholder="" />	  
			</Form.Group>
			<Button className="save-button" style={buttonstylelogin} type="submit" variant="outline-secondary" >Sign In</Button>
		  </Form>
          </Container>
          </React.Fragment>
        
           
           
        );
    }
}

