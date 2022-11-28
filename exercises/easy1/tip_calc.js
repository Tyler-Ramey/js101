let rlsync = require("readline-sync");

let bill = rlsync.questionFloat('Enter bill amount: ');
let tipPercent = rlsync.questionFloat('Enter tip percent: ');

let decimalTip = tipPercent / 100;
let tip = bill * decimalTip;
let total = bill + tip;

console.log(`Tip is: ${tip.toFixed(2)}\nTotal is: ${total.toFixed(2)}`);