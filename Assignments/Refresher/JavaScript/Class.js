class Transport {
    constructor(type, name, seatingCapacity) {
        this.type = type;
        this.name = name;
        this.seatingCapacity = seatingCapacity;
    }

    get myType() { // get means the function is a getter for a property/attribute of the class. get syntax binds an object property to a function that will be called when that property is looked up. For simple method use "myType()" and not "get myType()". But "myType()"  would return the function itself. We want to print the type which is done through "get myType()". When calling getter function, we dont use the parenthesis
        return this.type;
    }
    
    get myName() {
        return this.name;
    }

    get myCapacity() {
        return this.seatingCapacity;
    }
}

const Car = new Transport('Car', 'Audi Q7', '5') ;
console.log(`Type: ${Car.myType}, Name: ${Car.myName}, Capacity: ${Car.myCapacity}`);

// ADD A METHOD TO A CLASS ON THE FLY:
// We cannot add a method on the fly to a class derived instance. But we can add a method to the class itself. Prototypes can be used to add methods to classes that can be called by the instances.
/* // This is incorrect
Aeroplane.prototype.flyingAltitude = function () {
    return '45000 ft';
}
*/
// We can also add methods to function definitions in a similar fashion
// But how do we add methods on the fly to instances that have been derived from classes, in JS?
Transport.prototype.flyingAltitude = function (altitude) {
    this.altitude = altitude;
    return this.altitude;
}
const Aeroplane = new Transport('Aeroplane', 'Boeing 777', '400'); 
console.log(`Type: ${Aeroplane.myType}, Name: ${Aeroplane.myName}, Capacity: ${Aeroplane.myCapacity}, Altitude: ${Aeroplane.flyingAltitude('45000 ft')}`);

