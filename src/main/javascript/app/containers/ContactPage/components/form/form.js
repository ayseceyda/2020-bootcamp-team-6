import React,{ Component} from 'react';
import {
    Form,
	Button,
	Container,
	Table
	
} from 'react-bootstrap';
import './styles/style.css';
import MapContainer from '../google-map/google-map';

export default class FormComponent extends Component {



	render(){

		  
        return(
			<div className ="contact-shadow-div">
			<Table>
				<th>
					<td>
            <Form className ="contact-div">
				<br></br>
				<br></br>
				<h3> &nbsp; &nbsp; &nbsp;CONTACT WITH US!</h3>
				<br></br>
				<br></br>
			<Form.Group controlId="password_reset">
			  <Form.Label> &nbsp; &nbsp; &nbsp; FULL NAME</Form.Label>
			  <Form.Control type="text" placeholder="TEAM 6" />
			</Form.Group>
		   <Form.Group controlId="password_reset_confirm">
			  <Form.Label>&nbsp; &nbsp; &nbsp; E-MAIL</Form.Label>
			  <Form.Control type="email" placeholder="example@example.com" />
			</Form.Group>
		   
			<Form.Group name="address_box"controlId="address_change">
			  <Form.Label> &nbsp; &nbsp; &nbsp; COMMENTS</Form.Label>
			  <Form.Control className="textarea" as="textarea" rows="3" width="200px" htmlSize="5" placeholder="comments..."/>
			  
			</Form.Group>	
			<Button className="contact-submit-button" type="submit" variant="primary">Submit</Button>
		  </Form></td>
		  <td><MapContainer/></td>
				</th>
			</Table>

			</div>
		 
        );
    }
}