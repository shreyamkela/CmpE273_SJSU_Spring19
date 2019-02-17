function validateAdmin() {
    var userName = document.getElementById('username');
    var passWord = document.getElementById('password');
    if(userName.value == 'admin' && passWord.value == 'admin') {
        alert("Access Granted!");
    } else {
        alert("Access Denied!");
        userName.value = ""; // If access denied, reset the fields
        passWord.value = "";

    }
}