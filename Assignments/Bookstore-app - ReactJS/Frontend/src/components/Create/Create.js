import React, { Component } from "react";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";

class Create extends Component {
  handleCreate = () => {
    console.log("Create Clicked!", this.refs.bookID.value);
    axios.post("http://localhost:3001/create", {
      id: this.refs.bookID.value,
      title: this.refs.bookTitle.value,
      author: this.refs.bookAuthor.value
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
        <div>
          <br />
          <div class="container">
            <form onSubmit={this.handleCreate}>
              <div style={{ width: "30%" }} class="form-group">
                <input type="text" class="form-control" name="BookID" placeholder="Book ID" ref="bookID" />
              </div>
              <br />
              <div style={{ width: "30%" }} class="form-group">
                <input type="text" class="form-control" name="Title" placeholder="Book Title" ref="bookTitle" />
              </div>
              <br />
              <div style={{ width: "30%" }} class="form-group">
                <input type="text" class="form-control" name="Author" placeholder="Book Author" ref="bookAuthor" />
              </div>
              <br />
              <div style={{ width: "30%" }}>
                <button class="btn btn-success" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
