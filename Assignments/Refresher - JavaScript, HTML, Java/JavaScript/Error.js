function checkAvailability(username) {
    try {
        if (usernameDatabase.includes(username)) {
            throw "Sorry. The username already taken.";
        } else {
            usernameDatabase.push(username);
            console.log(`Congratulations! The username is available.`);
        }
    }
    catch (err) {
        console.log(err);
    }
    finally { // Always happens irrespective of try/catch execution
        console.log(`You have entered '${username}' as the username.`);
    }
}

let usernameDatabase = ['freddie', 'mercury', 'john', 'lennon', 'micheal', 'jackson'];

checkAvailability('elvis');
checkAvailability('elvis');