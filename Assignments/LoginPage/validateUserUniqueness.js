const fs = require('fs'); // To read and manipulate the database.json file - npm install fs

function validateUserUniqueness() {
    var fullName = (document.getElementById('name')).value;
    var studentID = (document.getElementById('sid')).value;
    var department = (document.getElementById('dept')).value;
    if(fullName.match(/[A-Za-z]/) && studentID.match(/[0-9]{9}/) && department.match(/[A-Za-z]/)) { // If the the patterns for all 3 fields are correct then do further processing. Else the HTML5 validation messages will be shown
        var userDatabase = fs.readFileSync('database.json');
        console.log("Hey");
        if(studentID in userDatabase) { // Lookup for a key in javascript object is O(1) - https://www.reddit.com/r/javascript/comments/6aonoo/is_looking_up_a_javascript_object_key_constant_o1/
            alert("Already Present!");
        } else {
            // let userDetails = {
            //     studentID : [   
            //         {
            //             "Name" : fullName,
            //             "Department" : department
            //         }
            //     ]
            // };
            // fs.appendFileSync('database.json', userDetails);
            // //alert(userDetails);
            alert(`Name: ${fullName}\nStudent ID: ${studentID}\nDepartment: ${department}`);
        }
        
    }
    
}