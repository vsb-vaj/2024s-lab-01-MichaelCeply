// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
    for (let i = 0; i < length; i++) {
        let arr = "";
        for (let j = 0; j < i; j++) {
            arr += "* ";
        }
        arr += "*";
        console.log(arr);
    }
};
drawTriangle(5);
console.log("----------------------------");
// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
    for (let i = 0; i <= word.length; i++) {
        let ret = "";
        for (let j = 0; j < word.length; j++) {
            ret += j < word.length - i ? "* " : word[j].toUpperCase() + " ";
        }
        console.log(ret.slice(0, -1));
    }
};
drawJavascriptWord();
console.log("----------------------------");
// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
    let ret = [];
    for (let arr of vehicles) {
        ret.push({ name: arr.name, topSpeed: Math.max(...arr.measuredSpeeds) });
    }
    return ret;
};

const vehicles = [
    { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
    { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
    { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
];
console.log(getVehiclesAndTopSpeed(vehicles));
