const express = require('express');
const fs = require('fs');

const port = 3000;

var app = express(); // make an app/application server that handles requests

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
    res.render('login.ejs'); 
});

app.post('/', (req, res) => { // After validation of the input on app.get('/'... page, we post to change the route to user_details page.
    res.render('user_details.ejs'); 
});

app.listen(port, () => { // We can also pass a function as the second argument to listen. Listen to port=3000 or heroku
    console.log(`Server is up on port ${port}`);
});