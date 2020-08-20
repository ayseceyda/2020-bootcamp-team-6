import React, { Component } from 'react';
import {
	Form,
	Button,
	Container,
	Table

} from 'react-bootstrap';
import './styles/style.css';
import MapContainer from '../google-map/google-map';
import CommentService from '../../../../services/CommentService';

export default class FormComponent extends Component {
	constructor(props){
		super(props)

		this.state = {
			name: '',
			email: '',
			comments: ''
		}

		this.changeCommentsHandler = this.changeCommentsHandler.bind(this);
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.changeNameHandler = this.changeNameHandler.bind(this);
		this.saveComments = this.saveComments.bind(this);
	}

	saveComments = (e)=>{
		e.preventDefault();
		let comments = {name: this.state.name, email: this.state.email, comments: this.state.comments};
		console.log('comments =>' + JSON.stringify(comments));

		CommentService.createComments(comments).then(res=>{
			console.log("success!");
		})
	}

	changeNameHandler =(event) =>{
		this.setState({name: event.target.value})
	}

	changeEmailHandler =(event) =>{
		this.setState({email: event.target.value})
	}

	changeCommentsHandler=(event)=>{
		this.setState({comments: event.target.value})
	}


	render() {


		return (
			<div className="contact-shadow-div">
				<Table>
					<th>
						<td>
							<Form className="contact-div">
								<br></br>
								<br></br>
								<h3> &nbsp; &nbsp; &nbsp;CONTACT WITH US!</h3>
								<br></br>
								<br></br>
								<Form.Group controlId="password_reset">
									<Form.Label> &nbsp; &nbsp; Full Name</Form.Label>
									<Form.Control type="text" placeholder="TEAM 6" value={this.state.name} onChange={this.changeNameHandler}/>
								</Form.Group>
								<Form.Group controlId="password_reset_confirm">
									<Form.Label>&nbsp; &nbsp; Email</Form.Label>
									<Form.Control type="email" placeholder="example@example.com" value={this.state.email} onChange={this.changeEmailHandler}/>
								</Form.Group>

								<Form.Group name="address_box" controlId="address_change">
									<Form.Label> &nbsp; &nbsp; Comments</Form.Label>
									<Form.Control className="textarea" as="textarea" rows="3" width="200px" htmlSize="5" 
									placeholder="Your Comments..." value={this.state.comments} onChange={this.changeCommentsHandler}/>

								</Form.Group>
								<Button className="contact-submit-button" type="submit" variant="primary" onClick={this.saveComments}>Submit</Button>
							</Form></td>
						<td><MapContainer /></td>
					</th>
				</Table>

			</div>

		);
	}
}