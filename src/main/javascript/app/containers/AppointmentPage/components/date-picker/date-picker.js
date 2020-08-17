import React from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

 
export default class DatePickerComponent extends React.Component {
    constructor() {
        super();
        var date = new Date();
        const format1 = "yyyy-MM-DTHH:MM"
      const  formatedDate = new moment(date).format(format1);
       
       
        this.state = {
           //yyyy-MM-ddThh:mm
           //17T21:17:18+03:00
            selectedDate: formatedDate
        };

        
       
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
        return (
            <TextField style={dateStyle}
          id="datetime-local"
          type="datetime-local"
          defaultValue={this.state.selectedDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        );
    }
}
