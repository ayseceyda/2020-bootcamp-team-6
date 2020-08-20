import React, { Component, } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import {
    Container,
    Jumbotron

} from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.js';
import ListAnimalComponent from './components/ListAnimalComponent';
import ListUserComponent from './components/ListUserComponent';
import ListCommentsComponent from './components/ListCommentsComponent';
import ListAppointmentsComponent from './components/ListAppointmentsComponent';
export default class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animals: [],
            users: [],
            comments: [],
            appointments: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:8086/api/v1/animals')
            .then(reponse => reponse.json())
            .then(data => this.setState({ animals: data, isLoading: false }));
        fetch('http://localhost:8086/users')
            .then(reponse => reponse.json())
            .then(data => this.setState({ users: data._embedded.users, isLoading: false }))
        fetch('http://localhost:8086/commentses')
            .then(reponse => reponse.json())
            .then(data => this.setState({ comments: data._embedded.commentses, isLoading: false }))
        fetch('http://localhost:8086/appointments')
            .then(reponse=> reponse.json())
            .then(data => this.setState({appointments: data._embedded.appointments, isLoading: false}))
    }
    render() {
        const { animals, isLoading, users, comments, appointments } = this.state;
        const settingsStyle = {
            padding: "4%",
            width: "100%",
            height: "80%",
            backgroundColor: "#e4dbd9",
            margin: "0% 0% 0% 0%",
            backgroundColor: "#f9ebee",
            opacity: "0.9",
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <React.Fragment>
                <NavbarComponent />
                <div style={settingsStyle}>
                    <h2 className="h2-textstyle">
                        Welcome the Admin Page!</h2>
                    <p>You've unlocked a secret! You can control where every you want in this page.</p><br></br>
                    <Jumbotron fluid>
                            <h3>Users</h3><br></br>
                            {users ? <ListUserComponent data={users} /> : null}
                    </Jumbotron>
                    <br></br>
                    <br></br>
                    <Jumbotron fluid>
                            <h3>Animals</h3><br></br>
                    {animals ? <ListAnimalComponent data={animals} /> : null}
                    </Jumbotron>
                    <br></br>
                    <br></br>
                    <Jumbotron fluid>
                            <h3>Comments</h3><br></br>
                    {comments ? <ListCommentsComponent data={comments} /> : null}
                    </Jumbotron>
                    <br></br>
                    <br></br>
                    <Jumbotron fluid>
                            <h3>Appointments</h3><br></br>
                    {appointments ? <ListAppointmentsComponent data={appointments} /> : null}
                    </Jumbotron>
                </div>

            </React.Fragment>
        );
    }
}
