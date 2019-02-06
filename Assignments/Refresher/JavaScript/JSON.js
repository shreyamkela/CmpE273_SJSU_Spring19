var classStrength = [
    {"Cmpe273" : 86},
    {"Cmpe275" : 64},
    {"Cmpe285" : 66}
];

console.log("Stringifying the class strength object");
var jsonString = JSON.stringify(classStrength);
console.log(jsonString);

console.log("Parsing the class strength JSON string");
var jsonParsed = JSON.parse(jsonString);
console.log("Extracting the class strength of CmpE 273 from parsed JSON:", jsonParsed[0].Cmpe273);
