let candidates = {
    "John" : "M",
    "Alexa" : "F",
    "Bryan" : "M",
    "Cindy" : "F",
    "Roy" : "M",
    "Evan" : "M"
};

let male = [];
let female = [];

for (key in candidates) {
    if(candidates[key] == "M") {
        male.push(key);
    } else if (candidates[key] == "F") {
        female.push(key);
    }
}

console.log("The male candidates are:", male);
console.log("The female candidates are:", female);
