function validateAdmin() {
    var userName = document.getElementById('username');
    var passWord = document.getElementById('password');
    if(userName.value == 'admin' && passWord.value == 'admin') {
        console.log("Access Granted");
    } else {
        console.log("Access Denied");
    }
}