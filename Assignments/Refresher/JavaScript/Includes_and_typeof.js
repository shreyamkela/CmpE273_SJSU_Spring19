let licenseNumbers = [];

let licenseRegistration = (number) => { 
    // Arrow function to check if the entered value is valid and if valid, check if it is already taken. If not, then add it to array.
    if(typeof(number) != "number") {
        console.log(`The entered value ${number} cannot be registered as a valid license number.`);
    } else {
        if(licenseNumbers.includes(number)) {
            console.log(`Sorry. The license number ${number} is already taken. Choose a new license number.`);
        } else {
            licenseNumbers.push(number);
            console.log(`Congratulations! License number ${number} registered.`);
        }
    }
}


licenseRegistration('A4R9$9');
licenseRegistration(239482);
licenseRegistration(239482);
licenseRegistration(887659);