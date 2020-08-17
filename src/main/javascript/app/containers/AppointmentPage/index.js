import React,{Component} from 'react';
import NavbarComponent from '../../components/navbar/navbar.js';
import {
    Container,
    Row,
    Table,
    Button
} from 'react-bootstrap';

import DatePickerComponent from './components/date-picker/date-picker.js';

export default class AppointmentPage extends Component{
    
    render(){
        const appointmentBorderStyle = {
            padding: "8%",
            width: "59%",
            height: "80%",
            backgroundColor: "#e4dbd9",
            margin: "11% 0% 0% 15.5%",
            backgroundColor: "#f9ebee",
            opacity: "0.8",
          }
          const submitStyle = {
            width: "27%",
            height: "20%",
            margin: "-4% 0% 0% 36.5%",
           
           
          }
        return(
            <div >
            <NavbarComponent />
            <Container >
    
           <div style={appointmentBorderStyle}>
                    <form >
                        <h1 className="text-center header" > Appointment </h1>
                        <div className="form-group" >
                        <DatePickerComponent />
                        </div>
                        <Button variant="outline-success" style={submitStyle} type="submit" >Submit</Button>
                        </form> 
    
                        </div>
            </Container>
            </div>

        );
    }
}


     
            
           