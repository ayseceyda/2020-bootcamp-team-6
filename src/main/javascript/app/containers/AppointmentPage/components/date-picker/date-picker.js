import React from 'react';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

 
export default class DatePickerComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

      
        this.state = {
           
            selectedDate: Date()
        };

      
        this.onChange = this.onChange.bind(this);
    }

    onChange(date) {
		this.setState({
			selectedDate: date
		});
	}

    render() {
        
        return (
            <TextField
          id="datetime-local"
          label="Appointment Date"
          type="datetime-local"
          defaultValue= {this.state.selectedDate} //!!!!!
          InputLabelProps={{
            shrink: true,
          }}
        />
        
        );
    }
}
