const fs = require('fs');

module.exports.append = (file, method, url, sessionID) => {
    
    var now = new Date().toString(); // To log date and time when server is pinged
    var log = `${now}: ${method} ${url} ${sessionID}`; // Logger - Logs whenever our server is pinged for any kind of requests. req.method is the kind of request made by the user, i.e GET, POST, etc. req.url is the url that the user visited/pinged
    console.log(log); 

    fs.appendFile(file, log + '\n', (err) => { // Log the current ping into server.log. log + '\n' is used to append new ping in nextline. Callback function is necessary for appendfile. We use error check as a callback function here. appendfile is an async func. Before node 7 async func were allowed to be made without callback but after that they have been deprecated. So we have to mention a callback func to an sync function 
    if(err) {
            console.log('Unable to append to server.log');
        }
    });
};
