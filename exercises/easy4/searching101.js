let rlsync = require("readline-sync");

let nums = [];

function addSuffix(num) {
  switch (num) {
    case 1: return '1st';
    case 2: return '2nd';
    case 3: return '3rd';
    case 4: return '4th';
    case 5: return '5th';
  }
}

function isIncluded(arr, val) {
  return arr.some(element => (element === val)) 
}

for (let runs = 1; runs <= 5; runs += 1) {
  let num = rlsync.questionInt(`Enter the ${addSuffix(runs)} number: `);
  nums.push(num);
}

let lastNum = rlsync.questionInt('Enter the last number: ');

if (isIncluded(nums, lastNum)) {
  console.log(`The number ${lastNum} appears in ${nums.join(',')}`);
} else {
  console.log(`The number ${lastNum} does not appear in ${nums.join(',')}`);
}