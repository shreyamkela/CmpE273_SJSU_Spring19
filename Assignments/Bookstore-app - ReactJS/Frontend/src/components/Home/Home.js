import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }
  //get the books data from backend
  componentDidMount() {
    axios.get("http://localhost:3001/home").then(response => {
      //update the state with the response data
      this.setState({
        books: this.state.books.concat(response.data)
      });
    });
  }

  render() {
    //iterate over books to create a table row
    let details = this.state.books.map(book => {
      return (
        <tr>
          <td>{book.BookID}</td>
          <td>{book.Title}</td>
          <td>{book.Author}</td>
        </tr>
      );
    });
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
          <h2>List of All Books</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {/*Display the Tbale row based on data recieved*/}
              {details}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
//export Home Component
export default Home;
