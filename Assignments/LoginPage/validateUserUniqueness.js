// const fs = require('fs'); // To read and manipulate the database.json file - npm install fs
// validateUserUniqueness is on the client side therefore require does not work. We can only require files that are on the server side. To include files on the client side, we use the 'import' keyword, as done in ReactJS which renders heavy content on frontend. Refer - https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined
// Another option is to keep database.json on the server side and manipulate it with the help of an express server.

// function validateUserUniqueness() {
//     var fullName = (document.getElementById('name')).value;
//     var studentID = (document.getElementById('sid')).value;
//     var department = (document.getElementById('dept')).value;
//     if(fullName.match(/[A-Za-z]/) && studentID.match(/[0-9]{9}/) && department.match(/[A-Za-z]/)) { // If the the patterns for all 3 fields are correct then do further processing. Else the HTML5 validation messages will be shown
//         var userDatabase = fs.readFileSync('database.json');
//         console.log("Hey");
//         if(studentID in userDatabase) { // Lookup for a key in javascript object is O(1) - https://www.reddit.com/r/javascript/comments/6aonoo/is_looking_up_a_javascript_object_key_constant_o1/
//             alert("Already Present!");
//         } else {
//             let userDetails = {
//                 studentID : [   
//                     {
//                         "Name" : fullName,
//                         "Department" : department
//                     }
//                 ]
//             };
//             fs.appendFileSync('database.json', userDetails);
//             //alert(userDetails);
//             alert(`Name: ${fullName}\nStudent ID: ${studentID}\nDepartment: ${department}`);
//         }
        
//     }
// }

function validateUserUniqueness() {
    var fullName = (document.getElementById('name')).value;
    var studentID = (document.getElementById('sid')).value;
    var department = (document.getElementById('dept')).value;
    if(fullName.match(/[A-Za-z]/) && studentID.match(/[0-9]{9}/) && department.match(/[A-Za-z]/)) { // If the the patterns for all 3 fields are correct then do further processing. Else the HTML5 validation messages will be shown
            alert(`Name: ${fullName}\nStudent ID: ${studentID}\nDepartment: ${department}`);
    }
}