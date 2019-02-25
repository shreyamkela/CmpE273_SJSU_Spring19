module.exports.calculateGPA = (courseGrades, courseCredits) => {
    var totalGradePoints = 0;
    var totalCredits = 0;
    for(index in courseGrades) {
        let thisCourseGrade = courseGrades[index];
        let thisCourseCredit = courseCredits[index];
        let courseGradePoint = thisCourseGrade*thisCourseCredit; // Grade point of a course = Course grade * Credit
        totalGradePoints += courseGradePoint;
        totalCredits += thisCourseCredit;
    }
    var finalGPA = totalGradePoints/totalCredits;
    return Math.round(finalGPA * 100) / 100; // Rounding of to 2 decimal places
};