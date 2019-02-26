import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  handleSubmit = () => {
    axios.post("http://localhost:3001/", {
      query: this.refs.input.value
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="input" ref="input" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
