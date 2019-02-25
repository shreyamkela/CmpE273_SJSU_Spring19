var GPA = require('./export.js');

let courseGrades = [4.0, 3.33, 3.66]; // Grades in 3 different courses
let courseCredits = [3.0, 3.0, 3.0]; // Credits of the 3 courses

console.log('GPA: ', GPA.calculateGPA(courseGrades, courseCredits));