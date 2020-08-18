import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Button,
    Container,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';


export default class CardComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            animals: []
        }
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch('http://localhost:8086/api/v1/animals')
        .then(reponse => reponse.json())
        .then(data => this.setState({animals: data, isLoading: false}));
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
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>


        );
    }
}