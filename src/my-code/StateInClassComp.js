import React, { Component } from "react";

export default class StateInClassComp extends Component {
  constructor() {
    super();
    this.state = {
      data: "Pranav",
    };
  }
  update() {
    this.setState({ data: "Devkar" });
  }
  render() {
    return (
      <div>
        <h1>State In Class Comp</h1>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.update()}>Update Data</button>
      </div>
    );
  }
}
