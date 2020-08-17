import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Button,
    Container
} from 'react-bootstrap';
import AnimalService from "../../../../services/AnimalService";


export default class CardComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }


    componentDidMount(){
        AnimalService.getAnimals().then((res) =>{
            this.setState({animal: res.data});
        });
    }
    render() {
        const cardstyle = {
            margin: "-0,5% 0% 0% 70%",
            align: "center",
            width: "100px",
          }
        return (
           
            <CardGroup>
                 {
                this.state.animals.map(
                    animal =>
                <Card>
                    <Card.Img variant="top" src={animal.animalImage}/>
                    <Card.Body>
                        <Card.Title>{animal.name}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                </Card.Text>
                        
                    </Card.Body>
                <Button style ={cardstyle} >See</Button><br /><br />
                        <Button href="/appointment" variant="primary">Adopt</Button><br /><br />
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                

                )
                }
                
                
                
                <Card>
                    <Card.Img variant="top" src="https://wallpapercave.com/wp/Qe4Xprm.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                </Card.Text>
                        
                    </Card.Body>
                    <Container>
                <Button variant="primary">See</Button><br /><br />
                <Button href="/appointment" variant="primary">Adopt</Button><br /><br />
                        </Container>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://wallpapercave.com/wp/Qe4Xprm.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                </Card.Text>
                        
                    </Card.Body>
                    
                    <Container>
                <Button variant="primary">See</Button><br /><br />
                <Button href="/appointment" variant="primary">Adopt</Button><br /><br />
                        </Container>
                       
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


        );
    }
}