const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const port = 3000;

var app = express(); // make an app/application server that handles requests

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// Maintain a log for all requests to the server:
app.use((req, res, next) => { //Registering your custom express middleware. next specifies what to do when this middleware call completes. Using this we can chain different middlewares. This is async operation so next has to be called otherwise the app handlers for requests will never fire and app pauses till next is called. This middleware moniters all of the requests to our server and therefore if next is not used, our server will not respond to any request
    var now = new Date().toString(); // To log date and time when server is pinged
    var log = `${now}: ${req.method} ${req.url}`; // Logger - Logs whenever our server is pinged for any kind of requests. req.method is the kind of request made by the user, i.e GET, POST, etc. req.url is the url that the user visited/pinged
    console.log(log); 
    fs.appendFile('server.log', log + '\n', (err) => { // Log the current ping into server.log. log + '\n' is used to append new ping in nextline. Callback function is necessary for appendfile. We use error check as a callback function here. appendfile is an async func. Before node 7 async func were allowed to be made without callback but after that they have been deprecated. So we have to mention a callback func to an sync function 
        if(err) {
            console.log('Unable to append to server.log');
        }
    });
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
    


    // IN USER DETAILS PAGE, ADD A BUTTON TO VIEW DATABASE (AFTER student id already present?)


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
        fs.writeFileSync('./report.json', JSON.stringify(report, undefined, 2), (err) => { //  JSON.stringify(report, undefined, 2) specifying 2 spacing stores ithe object into json file in a pretty manner. Note that we are not appending the json file. We cannot append directly. Rather we copy all contents of the file to a report object, add to this object and then write this new object back to this file. That is the file is overwritten with the new object.
            if(err) {
                console.log('Unable to append to report.json');
            } else {
                console.log(name);
            }
        });
        res.render('report.ejs', { alert: "" });
    }
});


app.post('/update', (req, res) => { 
    res.render('report.ejs', { alert: "<tr><td>Name</td><td>Student ID</td><td>Department</td><td><form action='/update' method='post'><input type='submit' value='Delete'></form></td><tr>" });
});


app.listen(port, () => { // We can also pass a function as the second argument to listen. Listen to port=3000 or heroku
    console.log(`Server is up on port ${port}`);
});