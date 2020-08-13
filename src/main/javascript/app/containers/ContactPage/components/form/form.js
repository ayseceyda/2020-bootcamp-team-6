import React,{ Component} from 'react';
import {
    Form,
	Button,
	Container
	
} from 'react-bootstrap';
import './styles/style.css';

export default class FormComponent extends Component {
    render(){
        return(
			
            <Form>
		
			<Form.Group controlId="password_reset">
			  <Form.Label>FULL NAME</Form.Label>
			  <Form.Control type="text" placeholder="TEAM 6" />
			</Form.Group>
		   <Form.Group controlId="password_reset_confirm">
			  <Form.Label>E-MAIL</Form.Label>
			  <Form.Control type="email" placeholder="example@example.com" />
			</Form.Group>
		   
			<Form.Group name="address_box"controlId="address_change">
			  <Form.Label>COMMENTS</Form.Label>
			  <Form.Control className="textarea" as="textarea" rows="3" width="200px" htmlSize="5" placeholder="comments..."/>
			  
			</Form.Group>	
			<Button className="contact-submit-button" type="submit" variant="outline-secondary">Submit</Button>
		  </Form>
		 
		 
        );
    }
}