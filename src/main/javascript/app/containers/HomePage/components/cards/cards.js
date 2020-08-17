import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Button,
    Container
} from 'react-bootstrap';


export default class CardComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }


    render() {
        const cardstyle = {
            margin: "0% 0% 0% 70%",
            align: "center",
            width: "100px",
          }
        return (
            <CardGroup>     
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