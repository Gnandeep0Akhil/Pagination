import React, { Component } from "react";

export class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      max: null,
      error: null
    };
  }

  handleChangeX = (event) => {
    this.setState({ max: event.target.value });
  };

  handleSubmit = (event) => {
    fetch("https://backend-pagination.herokuapp.com/get/max", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.props.set2(data);
      })
      .catch((err) => {
        this.setState({ error: err.toString() });
      });
    event.preventDefault();
    this.setState({ max: null });
  };

  render() {
    return (
      <div className="form2">
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <label>
            Get top X:<br/>
            <input
              type="number"
              name="max"
              value={this.state.max || ""}
              onChange={this.handleChangeX}
            /><br/>
            cities with max Population.
          </label>
          <br></br>
          <br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form2;