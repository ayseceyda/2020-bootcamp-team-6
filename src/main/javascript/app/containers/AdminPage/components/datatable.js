import React, { useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';

export default function DataTable(props) {
    

    console.log(props);
    const data = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
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
                label: 'Breed',
                field: 'breed',
                width: 270,
            },
            {
                label: 'Age',
                field: 'age',
                width: 200,
            },
            {
                label: 'Kind',
                field: 'kind',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Gender',
                field: 'gender',
                sort: 'arc',
                width: 150,
            },
            {
                label: 'Weight',
                field: 'weight',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Height',
                field: 'height',
                sort: 'arc',
                width: 100,
            },
            {
                label: 'Where is the animal?',
                field: 'animalStatus',
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