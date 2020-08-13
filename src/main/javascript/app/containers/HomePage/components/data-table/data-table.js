import React from "react";
import ReactDOM from "react-dom";
import { Input } from "semantic-ui-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./styles/style.css";

const originalData = [
  { id: "1", animalBreed: "Beagle", animalAge: "6", animalStatus: "Shelter" },
 
];

export default class DataTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: originalData,
      columns: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    let columns = [
      {
        Header: "ID",
        accessor: "id",
        sortable: false,
        show: true,
        displayValue: " ID"
      },
      {
        Header: "Animal Breed",
        accessor: "animalBreed",
        sortable: false,
        show: true,
        displayValue: "animal-breed "
      },
      {
        Header: "Animal Age",
        accessor: "animalAge",
        sortable: false,
        show: true,
        displayValue: " animal-age "
      },{
        Header: "Animal Status",
        accessor: "animalStatus",
        sortable: false,
        show: true,
        displayValue: " animal-status "
      }
    ];
    this.setState({ columns });
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = originalData.filter(value => {
      return (
        value.id.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.animalBreed.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.animalAge.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.animalStatus
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.setState({ data: filteredData });
  };

  render() {
    let { data, columns, searchInput } = this.state;
    return (
      <React.Fragment>
        <Input
          size="large"
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
       <br/>
        <ReactTable className="dataTable"
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
     </React.Fragment>
    );
  }
}

