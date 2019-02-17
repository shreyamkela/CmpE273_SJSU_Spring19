function validateUserUniqueness() {
    var fullName = document.getElementById('name');
    var studentID = document.getElementById('sid');
    var department = document.getElementById('dept');
    if(fullName.match('/[A-Za-z]/') && studentID.match('/[0-9]{9}/') && department.match('/[A-Za-z]/')) {
        document.getElementById('result').innerHTML = `Name ${fullName.value} ID ${studentID.value} Department ${department.value}`;
    }
    
}