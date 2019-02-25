// Method overriding in functions
// For method overriding in class refer Inheritance_class.js
// Refer - https://teamtreehouse.com/community/can-i-override-a-method-in-javascript-as-like-in-java

function give() { 
}

function take() { 
}

give.prototype.transfer = function () { // Add methods to give() using prototype
    console.log("Giving the money!");
};

take.prototype = new give; // Using prototype to override transfer function of give
// take.prototype = Object.create(give.prototype); // Same as "take.prototype = new give;"

take.prototype.transfer = function () {
    // give.call(this, transfer()); // Gives error - Then how do we include the already present code in give's transfer into take's transfer? If we cannot do this, then we might as well dont use "take.prototype = new give;" and just create a new method for take named transfer which has no relation with the transfer of give, just the name is same. There is no overriding without the use of "take.prototype = new give;" but it gives the same result as we have created a new transfer for take.
    console.log("Taking the money!");
};

var takeThis = new take; // Make new object of take
var giveThis = new give;
takeThis.transfer();
giveThis.transfer();
