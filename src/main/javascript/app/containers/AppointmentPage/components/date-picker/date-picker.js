import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { Button, Fade } from 'react-bootstrap';


import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
 
export default class DatePickerComponent extends React.Component {
  
    constructor(props) {
        super(props);
        var date = new moment();
        const format1 = "yyyy-MM-DThh:mm"
      const  formatedDate =  moment(date).format(format1);
     
     
       
        this.state = {
           //yyyy-MM-ddThh:mm
           //17T21:17:18+03:00
            selectedDate: formatedDate,
            open: false,
            seperator: "8",
            seperatorTime: " "    
               
          };
        this.setOpen = this.setOpen.bind(this);
      
      }
     
      setOpen(open) {
        
          this.setState({open});
         
      }
      handleChange(selectedDate) {
      
        this.setState(selectedDate)
      }
      
    render() {
 
      const dateStyle = {
        padding: "8%",
        width: "59%",
        height: "80%",
        backgroundColor: "#e4dbd9",
        margin: "0% 0% 0% 20.5%",
        backgroundColor: "#f9ebee",
        opacity: "0.8",
      }
      const submitStyle = {
        width: "27%",
        height: "20%",
        margin: "4% 0% 0% 36.5%",
       
       
      }
      
        return (
     
       <React.Fragment>
            <TextField style={dateStyle}
          id="datetime-local"
          type="datetime-local"
          defaultValue={this.state.selectedDate}
          onChange={(e) => this.handleChange({ selectedDate: e.target.value })}
         
          
        />
        
 
         
       
      <Fade in={this.state.open} >
        <div id="example-fade-text" className="text-center">
       <h2> Randevunuz: {this.state.selectedDate.substring(0, this.state.selectedDate.lastIndexOf(this.state.seperator)+ this.state.seperator.length)} <br/>
       {this.state.selectedDate.substring(11)}
        tarihine alınmıştır...</h2>
        </div>
      </Fade>
      <Button variant="outline-success" style={submitStyle} type="button" 
      onClick={()=>this.setOpen(!this.state.open)}
      >Submit</Button>
        </React.Fragment>   
        );
    }
}
