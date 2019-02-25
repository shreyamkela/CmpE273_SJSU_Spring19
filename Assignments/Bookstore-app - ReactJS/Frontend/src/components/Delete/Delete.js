import React, { Component } from "react";
import { Redirect } from "react-router";
import cookie from "react-cookies";
import axios from "axios";

class Delete extends Component {
  handleDelete = () => {
    // https://stackoverflow.com/questions/44107665/how-to-access-a-browser-cookie-in-a-react-app
    console.log("Delete Clicked!", this.refs.bookID.value); // form ref stores the input
    axios.post("http://localhost:3001/delete", {
      // post to delete route on server
      id: this.refs.bookID.value // data sent with the post. Can be used at the server side with req.body
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
        <div class="container">
          <form onSubmit={this.handleDelete}>
            {" "}
            {/* The action for the submit button is specified in the form with the onSubmit. ref stores the input of the field */}
            <div style={{ width: "50%", float: "left" }} class="form-group">
              <input
                type="text"
                class="form-control"
                name="BookID"
                placeholder="Search a Book by Book ID"
                ref="bookID"
                required
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
