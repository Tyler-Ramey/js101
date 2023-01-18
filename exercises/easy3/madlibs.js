const rlsync = require("readline-sync");

let noun = rlsync.question('Enter a noun: ');
let verb = rlsync.question('Enter a verb: ');
let adverb = rlsync.question('Enter an adverb: ');
let adjective = rlsync.question('Enter an adjective: ');

let madlib = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
  The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.
  The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`;
  
console.log(madlib);