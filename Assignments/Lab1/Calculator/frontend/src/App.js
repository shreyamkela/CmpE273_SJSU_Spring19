import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const cardStyle = {
  // Setting the css to be used in JSX
  height: "100px",
  width: "165px"
};

const appStyle = {
  width: "178px"
};

class App extends Component {
  state = {
    expression: "" // Set display character limit in the panel to 36
  };

  handleEquals = () => {
    // clicking the equals button
    console.log("Submit Clicked!");
    axios.post("http://localhost:3001/", {
      query: this.state.expression
    });
  };

  handleClick = event => {
    // clicking all except the equals button
    // We want to send the button id of 0-9, +,-,/,* and we want to handle them all with a single handler as we only want to concat them into the previous expression
    // Refer - https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    // Refer - https://www.freecodecamp.org/forum/t/react-js-passing-button-id-as-parameter-onclick-function/62301
    console.log(event.target.id);
    var previousExpression = this.state.expression;
    var expression = previousExpression + event.target.id;
    console.log(expression);
    this.setState({ expression });
  };

  render() {
    return (
      <div className="App border border-primary" style={appStyle}>
        <div className="container m-1">
          <div className="row">
            <div className="card border border-primary" style={cardStyle}>
              <div className="card-body">
                <p className="card-title">{this.state.expression}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <button id="7" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              7
            </button>
            <button id="8" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              8
            </button>
            <button id="9" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              9
            </button>
            <button id="/" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              /
            </button>
          </div>

          <div className="row">
            <button id="4" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              4
            </button>
            <button id="5" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              5
            </button>
            <button id="6" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              6
            </button>
            <button id="*" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              *
            </button>
          </div>

          <div className="row">
            <button id="1" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              1
            </button>
            <button id="2" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              2
            </button>
            <button id="3" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              3
            </button>
            <button id="-" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              -
            </button>
          </div>

          <div className="row">
            <button id="0" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              0
            </button>
            <button id="." onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              .
            </button>
            <button id="=" onClick={this.handleEquals} type="button" className="btn btn-outline-primary waves-effect m-1">
              =
            </button>
            <button id="+" onClick={this.handleClick} type="button" className="btn btn-outline-primary waves-effect m-1">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
