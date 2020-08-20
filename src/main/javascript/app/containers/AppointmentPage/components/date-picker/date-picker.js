import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { Button, Fade } from 'react-bootstrap';


import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import AppointmentService from "../../../../services/AppointmentService";
export default class DatePickerComponent extends React.Component {

  constructor(props) {
    super(props);
    var date = new moment();
    const format1 = "yyyy-MM-DThh:mm"
    const formatedDate = moment(date).format(format1);



    this.state = {
      //yyyy-MM-ddThh:mm
      //17T21:17:18+03:00
      selectedDate: formatedDate,
      open: false,
      seperator: "8",
      seperatorTime: " ",
      username: '',

    };
    this.setOpen = this.setOpen.bind(this);
    this.saveAppointment = this.saveAppointment.bind(this);

  }

  saveAppointment = (e) =>{
    e.preventDefault();
    let appointment = {username: this.state.username, appointmentDate: String(this.state.selectedDate)};
    console.log('appointments =>' + JSON.stringify(appointment));
    AppointmentService.createAppointment(appointment).then(res=>{
			console.log("success!");
		})
  }




  setOpen(open) {

    this.setState({ open });

  }
  handleChange(selectedDate) {

    this.setState(selectedDate)
  }

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {

    const dateStyle = {

      width: "70%",
      height: "50%",
      backgroundColor: "#e4dbd9",
      margin: "0% 0% 0% 15%",
      backgroundColor: "#f9ebee",
      opacity: "0.9",
    }
    const submitStyle = {
      width: "27%",
      height: "20%",
      margin: "0% 0% 0% 35%",


    }

    return (

      <React.Fragment>
        <TextField style={dateStyle}
          id="datetime-local"
          type="datetime-local"
          defaultValue={this.state.selectedDate}
          onChange={(e) => this.handleChange({ selectedDate: e.target.value })}


        />

        <br></br>
        <br></br>
        <label > Username </label>
        <input className="form-control" name="username" placeholder="Username" type="text"
          value={this.state.username} onChange={this.changeUsernameHandler} required />
        <br></br>
        <br></br>
        <br></br>


        <Fade in={this.state.open} >
          <div id="example-fade-text" className="text-center">
            <h5>Appointment Date: {this.state.selectedDate.substring(0, this.state.selectedDate.lastIndexOf(this.state.seperator) + this.state.seperator.length) + " " + (this.state.selectedDate.substring(11))}  </h5>
            <h5>Address: New York, NY 10012, US</h5>
            <h5>Username: {this.state.username}</h5>
          </div>
        </Fade>
        <Button variant="outline-success" style={submitStyle} type="button"
          onClick={this.saveAppointment}
        >Submit</Button>
      </React.Fragment>
    );
  }
}
