let saturn = {
    type: "rocky body without life",
    water: false,
};

let earth = {
    type: "rocky body with life",
    water: true,
    starSystem: "Sun"
};

let mountEverest = Object.assign({height: "29000 ft"}, earth); // All properties of Earth will be added to {height: "29000 ft"} and any poperties with same name will be overwritten by the vlue in earth
let halleysComet = Object.assign({water: false, tail: true}, earth, saturn); // Saturn overwrites any same name properties of earth which are then added {water: false, tail: true}. No change in the earth or the saturn objects themsselves. Object.assign(target, source1, source2); - Source1 add to and overwrites the prop of target. Source2 adds and overwrites these prop even further. Therefore in Object.assign(earth, saturn); - Saturn overwrties all  the prop of earth object itself. Now earth will have all prop changed to that of saturn.
console.log("Earth:\n", earth);
console.log("\nSaturn:\n", saturn);
console.log("\nMount Everest:\n", mountEverest);
console.log("\nHalley's Comet:\n", halleysComet);

