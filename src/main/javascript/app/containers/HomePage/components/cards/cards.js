import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Button,
    Container,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';
import './style/style.css'
export default class CardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            animals: [],
            isLoading: true,
            index: 2,
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:8086/api/v1/animals')
            .then(reponse => reponse.json())
            .then(data => this.setState({ animals: data, isLoading: false }));
    }

    render() {
        const cardstyle = {
            margin: "0% 0% 0% 0%",
            align: "center",
            width: "100px",
        }
        const { animals, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const x = animals.slice(2, 7);


        return (
            <CardGroup>
                {
                    x.map(
                        animal => {
                            return (
                                <Card style={cardstyle} key = {animal.id}>
                                    <Card.Img variant="top" src={animal.animalImage} />
                                    <Card.Body>
                                        <Card.Title className = "cardStyle">{animal.name}</Card.Title>
                                        <Card.Text className = "cardStyle">
                                            <span>Breed : &nbsp;{animal.breed}</span><br></br>
                                            <span>Kind: &nbsp; {animal.kind}</span>
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className = "cardStyle"><p>Gender: {animal.gender}</p> </ListGroupItem>
                                        <ListGroupItem className = "cardStyle"><p>Age: {animal.age}</p> </ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">See</Card.Link>
                                        <Card.Link href="/appointment">Adopt</Card.Link>
                                    </Card.Body>
                                </Card>
                            )
                        }

                    )
                }

            </CardGroup>


        );
    }
}