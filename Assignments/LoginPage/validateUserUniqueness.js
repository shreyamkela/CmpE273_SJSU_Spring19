function validateUserUniqueness() {
    var fullName = document.getElementById('name');
    var studentID = document.getElementById('sid');
    var department = document.getElementById('dept');
    document.getElementById('result').innerHTML = `Name ${fullName.value} ID ${studentID.value} Department ${department.value}`;
}