import React, { Component } from 'react'

export class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: null,
      city: null,
      error: null,
    };
  }

  handleChangeS = (event) => {
    this.setState({ state: event.target.value });
  };

  handleChangeC = (event) => {
    this.setState({ city: event.target.value });
  };
  
  handleSubmit = (event) => {
    fetch("https://backend-pagination.herokuapp.com/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.props.set1(data);
      })
      .catch((err) => {
        this.setState({ error: err.toString() });
      });
    event.preventDefault();
    this.setState({ state: null });
    this.setState({ city: null });
  };

  render() {
    return (
      <div className="form1">
        <p>{this.state.error}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            State:
            <br />
            <input
              type="text"
              name="state"
              value={this.state.state || ""}
              onChange={this.handleChangeS}
            />
          </label>
          <br />
          <label>
            City:
            <br />
            <input
              type="text"
              name="city"
              value={this.state.city || ""}
              onChange={this.handleChangeC}
            />
          </label>
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form1