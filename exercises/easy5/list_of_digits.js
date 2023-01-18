/*
Problem:
  - Given a single number arg, return a list of all the digits of the number
  Rules:
    - Digits should appear in the array in the order they are in the number
    - Should store the number as a number
Examples:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
Data Structure:
  - Input: number
  - Output: array of each number from arg
Algorithm:
  - Set an empty array named 'result'
  - While the number is greater than 0
    - Get the first digit of the number by doing number % 10, store in a variable
    - Set number to the lowest whole number of number / 10
    - Place the digit from the remainder in the start of the array
  - Return the array
*/

function digitList(num) {
  let result = [];
  
  while (num > 0) {
      let onesDigit = num % 10;
      num = Math.floor(num / 10);
      result.unshift(onesDigit);
  }
  
  return result;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]