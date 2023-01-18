/*
Input - a string of numbers
Output - a number containing the same number in the string

Problem
  Convert a string to a number using no built in methods
Data Structure
  Object to hold string numbers and their number values
Algorithm
  Make an object that holds all the key value pairs of numbers named DIGITS
  For each number in the string, map the value to the number from the digits object
  Take each number and place it in a value that can be returned
    To get each digit place the value should be reassigned over itself and multiplied by 10
    then add the digit currently being worked on
    Example to get 435
    
    10 * value + 4 > 10 * 0 + 4 = 4
    10 * value + 3 > 10 * 4 + 3 = 43
    etc
*/
function stringToSignedInteger(string) {
  if (string[0] === '-') return -stringToInteger(string.slice(1));
  if (string[0] === '+') return stringToInteger(string.slice(1));
  else return stringToInteger(string);
}

function stringToInteger(numberString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  
  let value = 0;
  
  for (let char of numberString) {
    let number = DIGITS[char];
    
    value = (10 * value) + number;
  }
  
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true