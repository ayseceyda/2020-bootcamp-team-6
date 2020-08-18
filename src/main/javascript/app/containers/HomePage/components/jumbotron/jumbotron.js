import React,{ Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

export default class JumbotronComponent extends Component {
    render() {
        return(
            <Jumbotron>
              <h1>WELCOME OUR FRIENDLY SHELTER!</h1>
                 <p>
                 Fluffy Paws Shelter is a animal shelter that founded at 2010 in New York. 
                  </p>
                  <p>Our mission is to serve animals of Central New York by providing safe, permanently shelter and care for abandoned or otherwise homeless cats and dogs, 
                 and to reduce pet overpopulation by means of spay and neuter and community outreach.</p>
  <p>
    <Button href ="/about" variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        );
    }
}