import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

export default function WithCSV(props) {
    

    console.log(props);
    const data = {
        columns: [
            {
                label: 'Username',
                field: 'username',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
                sort: 'arc'
            },
            {
                label: 'Appointment Date',
                field: 'appointmentDate',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },

        ],
        rows: props.data,
    };

    return <MDBDataTable 
            hover
            striped
            bordered
            small
            entriesOptions={[5, 20, 25]} entries={7} pagesAmount={4}
            searchTop searchBottom={false}
            data={data} exportToCSV proSelect />;
}