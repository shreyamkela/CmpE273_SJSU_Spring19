import React, { Component } from "react";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";

class Delete extends Component {
  handleDelete = () => {
    console.log("Delete Clicked!", this.refs.bookID.value);
    axios.post("http://localhost:3001/delete", {
      id: this.refs.bookID.value
    });
  };

  render() {
    //if not logged in go to login page
    let redirectVar = null;
    if (!cookie.load("cookie")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        {redirectVar}
        <div class="container">
          <form onSubmit={this.handleDelete}>
            <div style={{ width: "50%", float: "left" }} class="form-group">
              <input
                type="text"
                class="form-control"
                name="BookID"
                placeholder="Search a Book by Book ID"
                ref="bookID"
              />
            </div>
            <div style={{ width: "50%", float: "right" }}>
              <button class="btn btn-success" type="submit">
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Delete;
