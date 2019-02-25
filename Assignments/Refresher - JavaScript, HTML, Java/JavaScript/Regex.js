// Refer - https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
// Refer - https://www.w3schools.com/jsref/jsref_obj_regexp.asp

function emailValidity(emailId) { // Check if the email is valid or not
    let checkEmail = emailId.match(/\S+@\S+/); // match() outputs boolean. It checks whether emailId has anything matching /\S+@\S+/ or not. 
    // In regex, we state the redular exp either between /..../ or between '...'. Therefore, here the actual exp is \S+@\S+, in which \S means any character that is not a white space. + means any number of characters. Therefore, \S+ means any number of not white space characters. '@' is the literal @ character. Then \S+ again. Overall this means any number of not white space characters followed by a '@' followed by any number of not white space characters.
    let validity = checkEmail? 'valid' : 'invalid'; // Is checkEmail valid or not
    console.log(`The email id is ${validity}`);
    return validity;
}

function convertToEdu(emailId = 'xyz') {
    if(emailValidity(emailId) == 'valid') {
        let regex = '[^@]*$'; 
        // [^...] in regex means find any character NOT between the brackets, where ^ is the not. * means 0 to many characters. $ means at the end of the string. Overall this means find 0 to many characters that are not '@', towards the end of the string.
        let convertThis = emailId.match(regex); // Saves the latter half of the id, i.e the characters after the @.
        let eduId = emailId.replace(convertThis[0],'sjsu.edu'); // replace email with sjsu.edu
        console.log(`New SJSU Edu ID for the student is ${eduId}`);
    } else {
        console.log('Please enter a valid email id.');
    }
}

convertToEdu('john.doe@yahoo.com');
convertToEdu('jeffsmith92gmail.com');
convertToEdu();

