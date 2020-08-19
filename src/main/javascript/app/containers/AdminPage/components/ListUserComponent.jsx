import React, { Component } from 'react';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {Jumbotron, Container} from 'react-bootstrap';
import './style/style.css'
import UserService from "../../../services/UserService";

class ListUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
        }
    }



    componentDidMount(){
        fetch('http://localhost:8086/users')
        .then(reponse => reponse.json())
        .then(data => this.setState({users: data}));
    }

    render() {

        console.log(this.state.users);
        const liststyle = {
            backgroundColor: "#f8f9fa",
            opacity: "0.9",
          }

          const animalListtyle = {
              width: "100px",
              height: "100px"
          }

          const divstyle = {
            backgroundColor: "#f8f9fa",
            
            width: "80%",
            height: "100%"
          }

        return (

            <Jumbotron fluid>
            <Container>
              <h1>Users</h1>
              <MDBTable responsive maxHeight="400px" hover entries={5} pagesamount={4}>
                        <MDBTableHead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Address</th>
                                <th>Birthday</th>
                                <th>Rent Info</th>
                                <th>Pet Polisy</th>
                                <th>Yard Info</th>
                                <th>Live with Family?</th>
                                <th>How many Child?</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Dangerous Enviroment Info</th>
                            </tr>
                            </MDBTableHead>
                             <MDBTableBody>
                            {
                               
                                this.props.users.map(
                                    user=>{
                                        return(
                                            <tr key = {user.id}>
                                            <td className= "textStyle">{user.name}</td>
                                            <td className= "textStyle">{user.surname}</td>
                                            <td className= "textStyle">{user.address}</td>
                                            <td className= "textStyle">{user.birthday}</td>
                                            <td className= "textStyle">{user.rentInfo}</td>
                                            <td className= "textStyle">{user.petPolisy}</td>
                                            <td className= "textStyle">{user.yardInfo}</td>
                                            <td className= "textStyle">{user.familyInfo}</td>
                                            <td className= "textStyle">{user.childCount}</td>
                                            <td className= "textStyle">{user.username}</td>
                                            <td className= "textStyle">{user.password}</td>
                                            <td className= "textStyle">{user.isDanger}</td>
    
                                        </tr>
                                        )
                                    }
                                   
                                )
                            
                        }
                        </MDBTableBody>
                    </MDBTable>
            </Container>
          </Jumbotron>
                    
        );
    }
}

export default ListUserComponent;

