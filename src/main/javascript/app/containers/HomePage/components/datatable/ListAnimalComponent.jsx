import React, { Component } from 'react';
import Pagination from "./Pagination/index.js";
import Search from "./Search/index.js";
import {MDBTable, MDBTableBody, MDBTableHead, MDBDataTable} from 'mdbreact';
import {Jumbotron, Container} from 'react-bootstrap';
import './style/style.css'
class ListAnimalComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            animals: [],
            isLoading: true
        }
    }



    componentDidMount(){
        this.setState({isLoading:true});
        fetch('http://localhost:8086/api/v1/animals')
        .then(reponse => reponse.json())
        .then(data => this.setState({animals: data, isLoading: false}));
    }

    render() {

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
          const{animals, isLoading} = this.state;

          if(isLoading){
              return <p>Loading...</p>;
          }

        return (
            <Jumbotron fluid>
            <Container>
              <h1>Adoptable Animals</h1>
              <p>
                Are you alone? Do you want a friend that is never leave you. Then adopt an animal!
              </p>
              <MDBTable responsive maxHeight="400px" hover entries={5} pagesamount={4}
                    searchTop searchBottom={false}
                    searching={true} 
                    searchLabel="Search">
                        <MDBTableHead>
                            <tr>
                                <th>Animal Image</th>
                                <th>Animal Name</th>
                                <th>Animal Breed</th>
                                <th>Animal Age</th>
                                <th>Animal Kind</th>
                                <th>Animal Gender</th>
                                <th>Animal Weight</th>
                                <th>Animal Height</th>
                            </tr>
                            </MDBTableHead>
                             <MDBTableBody>
                            {
                                animals.map(
                                    animal =>
                                    <tr key = {animal.id}>
                                        <td className = "data-click-to-select"><img src ={animal.animalImage} style = {animalListtyle}></img></td>
                                        <td className= "textStyle">{animal.name}</td>
                                        <td className= "textStyle">{animal.breed}</td>
                                        <td className= "textStyle">{animal.age}</td>
                                        <td className= "textStyle">{animal.kind}</td>
                                        <td className= "textStyle">{animal.gender}</td>
                                        <td className= "textStyle">{animal.weight}</td>
                                        <td className= "textStyle">{animal.height}</td>
                                    </tr>
                                )
                            }
                        </MDBTableBody>
                    </MDBTable>
            </Container>
          </Jumbotron>
                    
        );
    }
}

export default ListAnimalComponent;

