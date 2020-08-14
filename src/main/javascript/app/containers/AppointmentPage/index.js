import React,{Component} from 'react';
import NavbarComponent from '../../components/navbar/navbar.js';
import {
    Container,
    Row,
    Table
} from 'react-bootstrap';
import TableComponent from './components/table/table.js';

export default class AppointmentPage extends Component{
    render(){

        return(
                <React.Fragment>
                    <NavbarComponent />
                    <Container>
                    <Row>
                    <TableComponent/>
                </Row>
                </Container>
                </React.Fragment>

        );
    }
}