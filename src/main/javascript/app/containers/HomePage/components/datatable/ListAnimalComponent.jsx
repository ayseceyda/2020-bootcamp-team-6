import React, { Component } from 'react';
import TableHeader from "./Header/index";
import Pagination from "./Pagination/index.js";
import Search from "./Search/index.js";

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
            <div style = {divstyle}>
                    <Pagination/>
                    <Search/>
                <div className = "row"  style = {liststyle}>

                    <table className = "table table-borderless " cellspacing="0" width="20%">
                        <thead>
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
                        </thead>

                        <tbody>
                            {
                                animals.map(
                                    animal =>
                                    <tr key = {animal.id}>
                                        <td className = "data-click-to-select"><img src ={animal.animalImage} style = {animalListtyle}></img></td>
                                        <td>{animal.name}</td>
                                        <td>{animal.breed}</td>
                                        <td>{animal.age}</td>
                                        <td>{animal.kind}</td>
                                        <td>{animal.gender}</td>
                                        <td>{animal.weight}</td>
                                        <td>{animal.height}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        );
    }
}

export default ListAnimalComponent;

