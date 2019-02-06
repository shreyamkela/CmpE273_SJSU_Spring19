let generateUsername = (firstName, lastName, birthYear) => {
    let birthYearString = String(birthYear); // COnvert birthYear to string
    let lastNameInitial = lastName[0];
    let birthYearLastTwoDigit = birthYearString.substr(birthYearString.length-2); // Store last 2 characters of birthYearString. For eg substr(5) means store all characters after 5
    let username = firstName + lastNameInitial + birthYearLastTwoDigit;
    return username;
};

console.log(generateUsername('Alan','Fleming', 1978));
console.log(generateUsername('Zack','White', 2002));