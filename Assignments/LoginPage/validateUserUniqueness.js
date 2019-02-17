function validateUserUniqueness() {
    var fullName = document.getElementById('name');
    var studentID = document.getElementById('sid');
    var department = document.getElementById('dept');
    if((fullName.value).match(/[A-Za-z]/) && (studentID.value).match(/[0-9]{9}/) && (department.value).match(/[A-Za-z]/)) {
        alert(`Name: ${fullName.value}\nStudent ID: ${studentID.value}\nDepartment: ${department.value}`);
    }
    
}