/*
Given a number convert it to a string without using built in methods

Input - number
Output - string of that number

Data Structure - array and primitives

Algorithm
  - Initialize an array containing the numbers 0-9 for look ups
  - Set 'string' to an empty string
  - While the number is greater than 0
    - Get the first most digit by getting the remainder of the number % 10
    - Reduce the number by dividing by 10 and assigning the number over itself
    - Using the remainder, map the remainder to its string digit using the array
        and prepend it to the string value
  - Return the string value
*/

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  
  if (sign === -1) return '-' + integerToString(Math.abs(num));
  if (sign === 1) return '+' + integerToString(num);
  else return integerToString(num);
}

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let string = '';
  
  do {
    let remainder = num % 10; // Gets the right most digit
    num = Math.floor(num / 10); // Reduces the number and rounds down
    string = DIGITS[remainder] + string;
  } while (num > 0);
  
  return string;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");