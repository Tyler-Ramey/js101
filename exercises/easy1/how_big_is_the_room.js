const READLINE = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;
console.log('Feet or Meters?');
let choice = READLINE.prompt();

if (choice.toLowerCase() === 'feet') {
  console.log('Enter length of room:');
  let lengthFt = READLINE.prompt();
  console.log('Enter width of room:');
  let widthFt = READLINE.prompt();
  console.log(`Area is ${lengthFt * widthFt}`);
} else if (choice.toLowerCase() === 'meters') {
  console.log('Enter length of room:');
  let lengthM = READLINE.prompt();
  console.log('Enter width of room:');
  let widthM = READLINE.prompt();
  console.log(`Area is ${lengthM * widthM}`);
} else {
  console.log('Invalid');
}



