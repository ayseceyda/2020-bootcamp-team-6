import React, { useEffect } from 'react';
import { DataTable } from 'mdbreact';

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
            },
            {
                label: 'Position',
                field: 'position',
                width: 270,
            },
            {
                label: 'Office',
                field: 'office',
                width: 200,
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Start date',
                field: 'date',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'disabled',
                width: 100,
            },
        ],
        rows: props.data,
    };

    return <DataTable hover data={data} exportToCSV proSelect />;
}