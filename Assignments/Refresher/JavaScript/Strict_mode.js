"use strict"; // Strict mode - Restricts some operations in js and throws an exception

let drivingLicense = {}; 

Object.defineProperty(drivingLicense, "license_number", {value: 'A5e6U78p', writable: true}); 
// Object.defineProperty defines a property/key with the name 'license_number' to drivingLicense object with value 'A5e6U78p'
Object.defineProperty(drivingLicense, "first_name", {value: 'Harper', writable: false});

drivingLicense.license_number = 'R9f8Y42k';
drivingLicense.first_name = 'Danny';

console.log(drivingLicense.license_number, drivingLicense.first_name);
// console.log(drivingLicense); // This prints '{}' only. Why?

