import React,{ Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default class JumbotronComponent extends Component {
    render() {
        return(
            <Jumbotron>
  <h1>WELCOME!</h1>
  <p>
    INFORMATION ABOUT WEBSITE!
  </p>
  <p>
    <Button href ="/about" variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        );
    }
}