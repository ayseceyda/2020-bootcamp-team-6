import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

export default function WithCSV(props) {
    

    console.log(props);
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
                sort: 'arc'
            },
            {
                label: 'Email Address',
                field: 'email',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Comment',
                field: 'comments',
                width: 270,
            }

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