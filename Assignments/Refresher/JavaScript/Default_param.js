let employeeDatabase = [];

function company(employeeName, position = 'Employee') { // Save name and position of employee in a database array
    let employee = { 
        name : employeeName,
        position : position
    };
    employeeDatabase.push(employee);
}

let printEmployees = () => { // Arrow function to print all the employee data in the database
    for (index in employeeDatabase) {
        let thisName = employeeDatabase[index].name;
        let thisPosition = employeeDatabase[index].position;
        console.log(`${thisName} - ${thisPosition}`);
    }
};

company('Elon Musk', 'CEO');
company('John Smith');

printEmployees();



