/* PEDAC
Problem
  Write a function that computes the sum of all numbers between 1 and 
  some other number, inclusive, that are multiples of 3 or 5. 
  For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
  You may assume that the number passed in is an integer greater than 1.
Example/Test Case
  multisum(3);       // 3
  multisum(5);       // 8
  multisum(10);      // 33
  multisum(1000);    // 234168
Data Structure
  Array of numbers
Algorithm
  GET a number
  FIND multiples of 3 and 5 between 1 and that number
    number % 3 === 0; number % 5 === 0
  IF a multiple of 3 or 5
    PUSH number to numberArray
  numberArray.reduce()

*/
function multisum (number) {
  let numberArray = [];
  let startValue = 0;
  
  for (let i = 1; i <= number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      numberArray.push(i);
    }
  }
  
  let sumOfNumbers = numberArray.reduce(
    (sum, currentValue) => sum + currentValue, startValue);
  
  return sumOfNumbers;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(50));
console.log(multisum(1000));    // 234168