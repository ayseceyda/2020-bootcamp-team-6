import React from 'react';
import {
Form,
Container,
Row,
Col,
Button,
Image
} from 'react-bootstrap';

import NavbarComponent from '../../components/navbar/navbar.js';
import UploadButtonComponent from './components/button/button.js';
import './components/styles/style.css';
export default class AccountSettingsPage extends React.Component {

	render() {
		const settingsStyle = {
            padding: "4%",
            width: "59%",
            height: "80%",
            backgroundColor: "#e4dbd9",
            margin: "4% 0% 0% 19.5%",
            backgroundColor: "#f9ebee",
            opacity: "0.8",
		  }
		  const buttonstyleRegister = {
            width: "10%",
          }
		return (
            <React.Fragment>
                <NavbarComponent/>
			<Container style={settingsStyle}>
                
                <Row>
                    <Col md={3}>
                    <img
            className="d-block w-100"
            src="https://i.hizliresim.com/KClnUw.png"
            alt="First slide"
          />
            <UploadButtonComponent/>
                    </Col>
                <Col md={9}>
					<Form>
			<Form.Group controlId="password_reset">
			  <Form.Label>RESET PASSWORD</Form.Label>
			  <Form.Control type="password" placeholder="" />
			</Form.Group>
		   <Form.Group controlId="password_reset_confirm">
			  
			  <Form.Control type="password" placeholder="" />
			</Form.Group>
			
			<Form.Group name="address_box"controlId="address_change">
			  <Form.Label>Add New Address</Form.Label>
			  <Form.Control className="textarea" as="textarea" rows="3" width="200px" htmlSize="5"/>
			</Form.Group>	
			<Button className="save-button" type="submit" variant="success" style={buttonstyleRegister}>Save</Button>
		  </Form>
		  
					</Col>
		  
			
			
		 
		 
		  
		  </Row>
		  </Container>
          </React.Fragment>
		);
	}
}