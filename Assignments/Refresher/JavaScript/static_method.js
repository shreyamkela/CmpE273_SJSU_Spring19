// Refer - https://medium.com/@yyang0903/static-objects-static-methods-in-es6-1c026dbb8bb1
// As MDN describes it, “Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.” In other words, static methods have no access to data stored in specific objects.
// Static method are used as utility functions, A method inside a class can be defined as a static method by append it with keyword ‘static’. That is, methods defined as static inside class cannot be used by instances. Then why even use static? Statci methods can be called without making an instance. So if we want to use some methods of the class without making an instance, we can do them with static.

class student {
    constructor(name, courseGrades) {
        this.name = name;
        this.courseGrades = courseGrades;
    }

    get myName() {
        return this.name;
    }

    static totalCourses(courseGrades) { // Parameter included so as to show that class itself can invoke this method
        var count = Object.keys(courseGrades).length; // Counts the number of names-value pairs in the object
        // for (let index in courseGrades) { // For loop to count the number of courses with index doesnt work is this object has everything on the 0 index
        //     count += 1;
        // }
        return count;
    }

    get printTotalCourses() {
        var courseCount = student.totalCourses(this.courseGrades); // The class accessing the static method
        return courseCount;
    }
}

let courseGrades = {
    "CmpE273" : 3.66,
    "CmpE275" : 3.33,
    "CmpE285" : 4.00
};
let alex = new student('Alex', courseGrades);

console.log(alex.myName); // Prints name    
console.log(alex.printTotalCourses); // Prints course count
console.log(alex.totalCourses); // This gives undefined as totalCourses is not accessible by alex. It is only accessible by the class itself
console.log(student.totalCourses(courseGrades)); // Prints course count without instanciation, by just passes the courseGrades object
