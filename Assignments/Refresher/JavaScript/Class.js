class Transport {
    constructor(type, name, seatingCapacity) {
        this.type = type;
        this.name = name;
        this.seatingCapacity = seatingCapacity;
    }

    get myType() {
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

// We cannot add method  on the fly to a class derived object. But we can add a method to the class itself
/* // This is incorrect
Aeroplane.prototype.flyingAltitude = function () {
    return '45000 ft';
}
*/
Transport.prototype.flyingAltitude = function (altitude) {
    this.altitude = altitude;
    return this.altitude;
}
const Aeroplane = new Transport('Aeroplane', 'Boeing 777', '400'); 
console.log(`Type: ${Aeroplane.myType}, Name: ${Aeroplane.myName}, Capacity: ${Aeroplane.myCapacity}, Altitude: ${Aeroplane.flyingAltitude('45000 ft')}`);

