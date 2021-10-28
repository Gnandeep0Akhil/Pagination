import React, { Component } from 'react'
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if(this.props.data1 !== null && this.props.data2 === null){
      return (
        <div className="Table">
          <ReactTable
            data={this.props.data1}
            columns={[
              {
                Header: () => <div className="head">State</div>,
                accessor: "state",
              },
              {
                Header: () => <div className="head">City</div>,
                accessor: "city",
              },
              {
                Header: () => <div className="head">Population</div>,
                accessor: "pop",
              },
              {
                Header: () => <div className="head">Location</div>,
                accessor: "loc",
                Cell: (row) => (
                  <div style={{ textAlign: "center" }}>[{row.value[0]}, {row.value[1]}]</div>
                ),
              },
            ]}
            defaultPageSize={12}
            pageSizeOptions={[3, 5, 10]}
            className="-striped -highlight"
          />
        </div>
      );
    }else if(this.props.data2 !== null && this.props.data1 === null){
      return (
        <div className="Table">
          <ReactTable
            data={this.props.data2}
            columns={[
              {
                Header: () => (
                  <div
                    className="head"
                  >
                    City
                  </div>
                ),
                accessor: "_id",
              },
              {
                Header: () => (
                  <div
                    className="head"
                  >
                    Population
                  </div>
                ),
                accessor: "pop",
              },
            ]}
            defaultPageSize={12}
            pageSizeOptions={[3, 5, 10]}
            className="-striped -highlight"
          />
        </div>
      );
    } else if (this.props.data1 === null && this.props.data2 === null) {
      return (
        <div className="Table">
          <h4>No query yet.</h4>
        </div>
      );
    } else {
      return <p>Something went wrong.</p>;
    }
  }
}

export default Table