import React,{ Component } from 'react';
import {
    Table
} from 'react-bootstrap';

export default class TableComponent extends Component {
    render() {
         return(
            <Table responsive="sm">
            <thead>
              <tr>
                <th>COLUMN</th>
        
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ROW</td>
        
              </tr>
            </tbody>
          </Table>
         );
    }
}