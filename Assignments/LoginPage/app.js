// Modules
const express = require("express");
const fs = require("fs");
const session = require("express-session");
// Helpers
const writeLog = require("./helpers/writeLog"); // log into log file. Can also use morgan extension
const writeThenInject = require("./helpers/writeThenInject"); // write the new report to report.json and then inject this new report html into report.ejs

const port = 3000;

var app = express(); // make an app/application server that handles requests

app.use(express.urlencoded({ extended: true })); // Through this, req.body contains the POSTed form data - body-parser functionality is available with express v4.16+ in this manner. Body parser itself was deprecated in the newer versions.
app.use(express.json());

app.use(
  session({
    // Sessions using express sessions. Note - Express-session vs Cookies-session - https://stackoverflow.com/questions/23566555/whats-difference-with-express-session-and-cookie-session
    cookieName: "session",
    resave: false,
    saveUninitialized: false,
    secret: "CmpE273_Assignments_LoginPage",
    duration: 10 * 60 * 1000, //setting the time for active session 10 min
    activeDuration: 5 * 60 * 1000
  })
); // setting time for the session to be active when the window is open

app.set("view engine", "ejs"); // ejs view engine

// Maintain a log for all requests to the server:
app.use((req, res, next) => {
  //Registering your custom express middleware. next specifies what to do when this middleware call completes. Using this we can chain different middlewares. This is async operation so next has to be called otherwise the app handlers for requests will never fire and app pauses till next is called. This middleware moniters all of the requests to our server and therefore if next is not used, our server will not respond to any request
  writeLog.append("./logs/server.log", req.method, req.url, req.sessionID); // log into log file
  next();
});

// Main page:
// Keep the ejs, hbs, etc view files (which are essentially all html files) in the views folder. Keep the static files like plain html files, images, etc in the public folder and configure them with express static middleware
// Refer - https://stackoverflow.com/questions/16111386/error-cannot-find-module-html
// Refer - https://www.geeksread.com/what-is-ejs-html-page-using-nodejs-express-framework/
app.get("/", (req, res) => {
  // '/' is the root or landing page/route of your application/website. Here we are defining what happens when user visits the '/' page. req defines all the data/flags etc the user has sent i.e req can be set by the user input and then by analysis req we can determine what to send back. res is the response we send back
  res.render("login_v1.ejs", { alert: "" }); // alert variable is used afterwards
  // Sending data from res.render intp the ejs file - https://stackoverflow.com/questions/37991995/passing-a-variable-from-node-js-to-html/51084510
});

app.post("/", (req, res) => {
  // After validation of the input on app.get('/'... page, we post to change the route to user_details page.
  var userName = req.body.username; // We need to store req.body.username in a var so as to print or use it. Directly using req.body.username) treats it as [Object object] and doesnt give us the actual internal value
  var passWord = req.body.password;
  // console.log("Session ID: ", req.sessionID); // console.log on the serverside wont reflect on the frontend, i.e this console.log wont print on the browser console
  if (userName == "admin" && passWord == "admin") {
    req.session.user = "admin";
    console.log;
    res.redirect("/report");
  } else {
    req.session.user = undefined; // If we dont change req.session.user to undefined, then if we first login in as admin, req.session.user is still = admin when a different user tries to login so they will be able to hit a get request to /report from the url bar.
    res.render("login_v1.ejs", {
      alert:
        "<div id='denied' style='text-align: center;'> Access Denied! </div>"
    }); // If not admin then add div of access denied. TODO: Can use res.redirect with the alert?
  }
});
// TODO: req.session.user == "admin" validation has to be done in each and every get/post route? Is there one time code for this?
// TODO: We have put checking on req.session.user i.e the user input. Is this correct? Or should we be only checking the session Id/cookie ID and not any input
app.get("/report", (req, res) => {
  // TODO: How to change link in url when user clicks back button of chrome?
  if (req.session.user == "admin") {
    res.render("user_details_v1.ejs", { alert: "" }); // If admin then render the user details page
  } else {
    res.redirect("/");
  }
});

app.post("/report", (req, res) => {
  // How to change link in url when user clicks back button of chrome?
  if (req.session.user == "admin") {
    var name = req.body.name;
    var sid = req.body.sid;
    var dept = req.body.dept;
    var report = JSON.parse(fs.readFileSync("./report.json", "utf8")); // Read the whole file as a string then parse that string as a json object

    if (sid in report) {
      res.render("user_details_v1.ejs", {
        alert:
          "<div id='duplicate'  style='text-align: center;'> Student ID already present in the report! </div>"
      });
    } else {
      let partOfEntry = {
        Name: name,
        Department: dept
      };
      let entry = {};
      entry[sid] = partOfEntry;
      report = Object.assign(entry, report); // Add a new entry to the report object
      var thisInject = writeThenInject.thisReport(report); // write the new report to report.json and then inject this new report html into report.ejs
      res.redirect("/update");
    }
  } else {
    res.redirect("/");
  }
});

app.get(["/update", "/update/:id"], (req, res) => {
  if (req.session.user == "admin") {
    var thisReport = JSON.parse(fs.readFileSync("./report.json", "utf8")); // Load the report
    var thisInject = writeThenInject.thisReport(thisReport); // write the new report to report.json and then inject this new report html into report.ejs
    res.render("report.ejs", { inject: thisInject });
  } else {
    res.redirect("/");
  }
});
// Note - GET is for render, and POST is for update and redirect - when page is refresh, it is a get call - All that browser does is GET calls - But postman can do GET as well as POST
// TODO: Seperate each route to its own file
// TODO: Does session management make the system stateful, as we as saving the cookes?
// TODO: Add logout button so as to change the sessionid when admin logs out. session id should also change when user goes back to login page?
// FIXME: When the table is overwritten, the previous table entry moves down by 1 and the new one is added above it. New entries should be added below previous entries
app.post(["/update", "/update/:id"], (req, res) => {
  // :id is a placeholder and the is the id param sent on the update route. For example if form/row of student id 21 is to be deleted, in the html form action='/update/21' is done and on the route, /update/:id catches the 21 and saves it as param which can be accessed with req.params
  if (req.session.user == "admin") {
    var thisReport = JSON.parse(fs.readFileSync("./report.json", "utf8")); // Load the report
    var id = req.params.id;
    delete thisReport[id]; // delete the clicked entry from report
    var thisInject = writeThenInject.thisReport(thisReport); // write the new report to report.json and then inject this new report html into report.ejs
    res.render("report.ejs", { inject: thisInject });
  } else {
    res.redirect("/");
  }
});

app.get("*", function(req, res) {
  // To handle any other route - That is a non-existant route
  res.send("The page does not exist.", 404);
  // res.redirect('/');
});

app.listen(port, () => {
  // We can also pass a function as the second argument to listen. Listen to port=3000 or heroku
  console.log(`Server is up on port ${port}`);
});
