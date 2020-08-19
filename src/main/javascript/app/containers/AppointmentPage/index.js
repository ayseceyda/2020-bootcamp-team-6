import React,{Component} from 'react';
import NavbarComponent from '../../components/navbar/navbar.js';
import {
    Container,
    Row,
    Table,
    Col,
    Button
} from 'react-bootstrap';

import DatePickerComponent from './components/date-picker/date-picker.js';
import Footer from '../../components/Footer/Footer.jsx';
export default class AppointmentPage extends Component{
    
    render(){
        const appointmentBorderStyle = {
            padding: "15.9%",
            width: "100.1%",
            height: "100%",
            backgroundColor: "#e4dbd9",
            margin: "0% % 0% 0%",
            backgroundColor: "#f9ebee",
            opacity: "0.9",
          }
          const submitStyle = {
            width: "27%",
            height: "20%",
            margin: "0% 0% 0% 0%",  
          }

          const submitAppointment = {
            width: "100%",
            height: "100%",
            margin: "0% 0% 0% 0%",  
          }
        return(
            <div >
               
            <NavbarComponent />
            
            <table>
                <tr>
                    <td style= {submitAppointment}>
                    <div style={appointmentBorderStyle}>
                    <Col>
                    <Row>
                    <form >
                        <h2 className="text-left header" > Appointment </h2>
                        <br></br>
                        <br></br>
                        <p>Thank you to consider adoption! We're happy to see you here!</p>
                        <p>Just pick a date and your appointment day will be set up.</p>
                        <div className="form-group" >
                        <DatePickerComponent />
                        </div>
                      
                        </form> 
                        </Row>
                        </Col>
                        </div>
                    </td>
                    <td style={submitStyle}><img src="https://i.hizliresim.com/WilYWz.jpg" weight='70%' height='55%'/></td>
                </tr>
            </table>
           
            <Footer/>
           
            </div>

        );
    }
}


     
            
           