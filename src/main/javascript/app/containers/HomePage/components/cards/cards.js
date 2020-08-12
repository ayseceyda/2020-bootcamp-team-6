import React, { Component } from 'react';
import {
    Card,
    CardGroup,
    Button
} from 'react-bootstrap';



export default class CardComponent extends Component {
    render() {
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
                    <div>
                    <Button variant="primary">See</Button><br /><br />
                        <Button variant="primary">Adopt</Button><br /><br />
                        </div>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://wallpapercave.com/wp/Qe4Xprm.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                        </Card.Text>
                        
                    </Card.Body>
                    <div>
                    <Button variant="primary">See</Button><br /><br />
                        <Button variant="primary">Adopt</Button><br /><br />
                        </div>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.hizliresim.com/2NLXuO.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                </Card.Text>
                        
                    </Card.Body>
                    <div>
                    <Button variant="primary">See</Button><br /><br />
                        <Button variant="primary">Adopt</Button><br /><br />
                        </div>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


        );
    }
}