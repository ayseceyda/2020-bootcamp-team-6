import React, { Component } from 'react';
import AnimalService from '../../../services/AnimalService'

class ListAnimalComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }



    componentDidMount(){
        AnimalService.getAnimals().then((res) =>{
            this.setState({animals: res.data});
        });
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

        return (
            <div>
                <h2 className="text-center" >Animals</h2>
                <div className = "row"  style = {liststyle}>
                    <table className = "table table-striped table-bordered">
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
                                this.state.animals.map(
                                    animal =>
                                    <tr key = {animal.id}>
                                        <td><img src ={animal.animalImage} style = {animalListtyle}></img></td>
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