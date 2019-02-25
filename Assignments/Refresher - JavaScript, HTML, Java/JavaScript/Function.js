let vehicles = {
    "SUV" : 10,
    "Sedan" : 27,
    "Luxury" : 5
};

function travelAgency(vehicleType) { 

    if (vehicles[vehicleType] != undefined) { // If key is present in the vehicles object, the value will be not be undefined
        console.log(`We provide ${vehicles[vehicleType]} vehicles of the type ${vehicleType}.`);
    } else {
        console.log('Sorry. We only provide the following types of vehicle:');  
        for (var key in vehicles) { // Loop through vehicles and print all the keys
            console.log(key);
        }
    }

}

travelAgency("SUV");
travelAgency("Sedan");
travelAgency("Luxury");
travelAgency("Hatchback");

