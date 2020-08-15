import React, { useState } from 'react';
import {
    Form
} from 'react-bootstrap';

import DatePickerComponent from '../date-picker/date-picker.js';

export default class TableComponent extends React.Component {
 
    render() {
   
         return(
             <Form>
                 <Form.Group>
                 <DatePickerComponent/>
                 </Form.Group>
             </Form>
          
        
         );
    }
}

/*

*/