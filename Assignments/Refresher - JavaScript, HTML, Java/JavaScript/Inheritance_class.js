class appliance {
    // #applianceId; // For private attributes in class - Feature of babel 7
    constructor (type, name, price, manufacturedIn, size) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.manufacturedIn = manufacturedIn;
        this.size = size;
        // this.applianceId = 001; // private to this class
    }

    get myName() {
        console.log(this.name); // Return not used so as to demonstrate how sub class can override this method
    }

    get myType() {
        return this.type;
    }

    totalCost(quantity) { // Simple function. Not a getter therefore getter not used.
        return this.price*quantity;
    }

    static printHey() { // Subclass can access static method of super. Subclass instance cannot access static method of super.
        console.log("Hey");
    }

}

class refrigerator extends appliance {
    constructor(name, price, manufacturedIn, doorCount, capacity) {
        var undef = undefined;
        super(undef, name, price, manufacturedIn, undef); // Think of super as the mirror image of the constructor (type, name, price, manufacturedIn, size) in appliance. Now, we only want to use name, price, and manufaturedIn from super, but we cannot pass parameters as super(name, price, manufacturedIn) because the first three parameters in the constructor of appliance class definiation are type, name, price. Therefore we use super(undef, name, price, manufacturedIn, undef) if we only want to pass a few of all the parameteres. Note - The use of undef variable for this is my own creation.
        this.doorCount = doorCount;
        this.capacity = capacity;
        this.item = [];
    }

    get myName() { // Override parent definition of the same function
        super.myName; // Use all the code in super in the myName(). This will console.log name of subclass as done in the definition of super
        return (this.name).toUpperCase(); // Add new code. This will return name in uppercase
    }

    freeze(item) {
        (this.item).push(item);
    }

    get fridgeItems() { 
        return this.item;
    }

}

let fridgeSuperClass = new appliance("Refrigerator", "Whirlpool", 400, "Finland", "250 litre");
console.log("Super Class instance \"Refrigerator\":");
console.log("Type:", fridgeSuperClass.myType);
console.log("Name:");
fridgeSuperClass.myName;
console.log("Size:", fridgeSuperClass.size);
console.log("Total Cost for 5 units:", fridgeSuperClass.totalCost(5));

let fridgeSubClass = new refrigerator("Bosch", 650, "Korea", 2, "400 litre");
fridgeSubClass.freeze("Apples"); // Freeze an item in the fridgeSubClass
fridgeSubClass.freeze("Cilantro");
console.log("\nSub Class instance \"Refrigerator\":");
console.log("Type:", fridgeSubClass.myType); // undefined as myType not defined for sub class
console.log("Size:", fridgeSubClass.size); // undefined as size not defined for sub class
console.log("Name:", fridgeSubClass.myName); // Prints uppercase as it overrides the definition of the same function in super
console.log("Price:", fridgeSubClass.price); 
console.log("Door Count:", fridgeSubClass.doorCount);
console.log("Capacity:", fridgeSubClass.capacity);
console.log("Total Cost for 2 units:", fridgeSubClass.totalCost(2)); // Using a method of super in the instance of sub class
console.log("All items in fridge:", fridgeSubClass.fridgeItems); 
refrigerator.printHey(); // Trying to access super class static method from sub class;

