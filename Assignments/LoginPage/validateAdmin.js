function validateAdmin() {
    var userName = document.getElementById('username');
    var passWord = document.getElementById('password');
    if(userName.value == 'admin' && passWord.value == 'admin') {
        console.log("Access Granted!");
        return true;
        //alert("Access Granted!");
        // TAKE TO THE USER DETAILS PAGE
    } else {
        //alert("Access Denied!"); // If we use alert then the 'Please fill out this field' validation message of HTML5 is not shown and straightaway this alert box is shown
        console.log("Access Denied!");
        return false;
        // if(userName.value != "" && passWord.value != "") { // Reset only if both the text boxes are filled
        //     userName.value = ""; // If access denied, reset the fields
        //     passWord.value = "";
        //     alert("Access Denied!");
        // }
        // ADD COOKIES AND EXPRESS SESSION FUNCTIONALITY TO RESTRICT USER IF ACCESS DENIED
    }
}