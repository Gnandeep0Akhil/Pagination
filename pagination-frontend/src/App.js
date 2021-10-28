import "./App.css";
import { Component } from "react";
import Table from "./components/Table";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Part3 from "./components/Part3";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: null,
      data2: null,
    };
  }

  Set1 = (value) => {
    this.setState({ data1: value });
    this.setState({ data2: null });
  };

  Set2 = (value) => {
    this.setState({ data2: value });
    this.setState({ data1: null });
  };

  render() {
    return (
      <>
        <Form1 set1={this.Set1} />
        <Form2 set2={this.Set2} />
        <Part3 />
        <Table data1={this.state.data1} data2={this.state.data2} />
      </>
    );
  }
}

export default App;