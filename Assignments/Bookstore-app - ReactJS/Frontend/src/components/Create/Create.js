import React, { Component } from "react";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";

class Create extends Component {
  handleCreate = () => {
    // called when submit is clicked
    console.log("Create Clicked!", this.refs.bookID.value); // form ref stores the input
    axios.post("http://localhost:3001/create", {
      // post to create route on server
      id: this.refs.bookID.value, // data sent with the post. Can be used at the server side with req.body
      title: this.refs.bookTitle.value,
      author: this.refs.bookAuthor.value
    });
  };

  render() {
    //if not logged in go to login page:
    // At the server end, we use res.cookie command of the express-session library, to set the name 'cookie' to the cookie sent to client, when admin logs in. At react/client end, we can check whether the name is 'cookie' or not, to authenticate.
    // At react/client end, we check the cookie name using cookie.load('cookie') command of the 'react-cookies' library. If cookie.load('cookie') != null this means that the user is admin
    // https://stackoverflow.com/questions/44107665/how-to-access-a-browser-cookie-in-a-react-app
    let redirectVar = null;
    if (!cookie.load("cookie")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div>
        {redirectVar}{" "}
        {/* If cookie name is null then redirectVar is /login, else it is null. If redirectVar is /login. the react router routes the page to login, without loading the divs below */}
        <div>
          <br />
          <div class="container">
            <form onSubmit={this.handleCreate}>
              {" "}
              {/* The action for the submit button is specified in the form with the onSubmit. ref stores the input of the fields */}
              <div style={{ width: "30%" }} class="form-group">
                <input type="text" class="form-control" name="BookID" placeholder="Book ID" ref="bookID" required />
              </div>
              <br />
              <div style={{ width: "30%" }} class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="Title"
                  placeholder="Book Title"
                  ref="bookTitle"
                  required
                />
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
