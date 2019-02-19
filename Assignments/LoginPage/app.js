// Modules
const express = require('express');
const fs = require('fs');
var session = require('express-session');
// Helpers
const writeLog = require('./helpers/writeLog'); // log into log file. Can also use morgan extension
const writeThenInject = require('./helpers/writeThenInject'); // write the new report to report.json and then inject this new report html into report.ejs

const port = 3000;

var app = express(); // make an app/application server that handles requests

app.use(express.urlencoded({ extended: true })); // Through this, req.body contains the POSTed form data - body-parser functionality is available with express v4.16+ in this manner
app.use(express.json());

app.set('view engine', 'ejs');

// Maintain a log for all requests to the server:
app.use((req, res, next) => { //Registering your custom express middleware. next specifies what to do when this middleware call completes. Using this we can chain different middlewares. This is async operation so next has to be called otherwise the app handlers for requests will never fire and app pauses till next is called. This middleware moniters all of the requests to our server and therefore if next is not used, our server will not respond to any request
    writeLog.append('./logs/server.log', req.method, req.url); // log into log file
    next(); // If next is not used, server pauses here and no request is served
});

// Main page:
// Keep the ejs, hbs, etc view files (which are essentially all html files) in the views folder. Keep the static files like plain html files, images, etc in the public folder and configure them with express static middleware
// Refer - https://stackoverflow.com/questions/16111386/error-cannot-find-module-html
// Refer - https://www.geeksread.com/what-is-ejs-html-page-using-nodejs-express-framework/
app.get('/', (req, res) => { // '/' is the root or landing page/route of your application/website. Here we are defining what happens when user visits the '/' page. req defines all the data/flags etc the user has sent i.e req can be set by the user input and then by analysis req we can determine what to send back. res is the response we send back
    res.render('login_v1.ejs', { alert: "" }); // alert variable is used afterwards
    // Sending data from res.render intp the ejs file - https://stackoverflow.com/questions/37991995/passing-a-variable-from-node-js-to-html/51084510
});

app.post('/', (req, res) => { // After validation of the input on app.get('/'... page, we post to change the route to user_details page.
    var userName = req.body.username; // We need to store req.body.username in a var so as to print or use it. Directly using req.body.username) treats it as [Object object] and doesnt give us the actual internal value
    var passWord = req.body.password;
    if(userName == 'admin' && passWord == 'admin') {
        res.render('user_details_v1.ejs', { alert: "" }); // If admin then render the user details page
    } else {
        res.render('login_v1.ejs', { alert: "<div id='denied'> Access Denied! </div>" }); // If not admin then add div of access denied
    }
});

app.post('/report', (req, res) => { // How to change link in url when user clicks back button of chrome?
    var name = req.body.name; 
    var sid = req.body.sid;
    var dept = req.body.dept;
    var report = JSON.parse(fs.readFileSync('./report.json', 'utf8')); // Read the whole file as a string then parse that string as a json object
    // TODO: IN USER DETAILS PAGE, ADD A BUTTON TO VIEW DATABASE (AFTER student id already present?)

    if(sid in report) {
        res.render('user_details_v1.ejs', { alert: "<div id='duplicate'> Student ID already present in the report! </div>" });
    } else {
        let partOfEntry = {
            "Name" : name, 
            "Department" : dept
        };
        let entry = {};
        entry[sid] = partOfEntry;
        report = Object.assign(entry, report); // Add a new entry to the report object
        var thisInject = writeThenInject.thisReport(report); // write the new report to report.json and then inject this new report html into report.ejs

        res.render('report.ejs', { inject : thisInject });
    }
});

// TODO: Add Get Posts seperate - get for display and post for update and redirect - when refresh, it is a get call - 
app.post('/update/:id', (req, res) => { // :id is a placeholder and the is the id param sent on the update route. For example if form/row of student id 21 is to be deleted, in the html form action='/update/21' is done and on the route, /update/:id catches the 21 and saves it as param which can be accessed with req.params 
    var thisReport = JSON.parse(fs.readFileSync('./report.json', 'utf8')); // Load the report
    var id = req.params.id;
    delete thisReport[id]; // delete the clicked entry from report
    var thisInject = writeThenInject.thisReport(thisReport); // write the new report to report.json and then inject this new report html into report.ejs

    res.render('report.ejs', { inject: thisInject });
});


app.listen(port, () => { // We can also pass a function as the second argument to listen. Listen to port=3000 or heroku
    console.log(`Server is up on port ${port}`);
});