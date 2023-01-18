let rlsync = require("readline-sync");

let currentYear = new Date().getFullYear();

let age = rlsync.questionInt('What is your age?\n');
let retireAge = rlsync.questionInt('At what age would you like to retire?\n');

let yearsLeft = retireAge - age;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsLeft}.`);
console.log(`You only have ${yearsLeft} of work to go!`);