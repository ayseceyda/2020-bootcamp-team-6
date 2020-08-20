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
            },
            {
                label: 'Surname',
                field: 'surname',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Address',
                field: 'address',
                width: 270,
            },
            {
                label: 'Birthday',
                field: 'birthday',
                width: 200,
            },
            {
                label: 'Rent Info',
                field: 'rentInfo',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Pet Policy',
                field: 'petPolisy',
                sort: 'arc',
                width: 150,
            },
            {
                label: 'Yard Info',
                field: 'yardInfo',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Family Info',
                field: 'familyInfo',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Children Number',
                field: 'childCount',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Username',
                field: 'username',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Dangerous Enviroment?',
                field: 'isDanger',
                sort: 'arc',
                width: 100,
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