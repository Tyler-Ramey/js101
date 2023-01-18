/*
Problem:
  - Write a function that takes an arr of ints and returns the avg, rounded down
  - Input: Array of positive integers
  - Output: A number of the avg of the arr
  - Rules:
    - Numbers will always be positive
    - The array will never be empty
    - Round the avg down
Examples:
  average([1, 5, 87, 45, 8, 8]);       // 25
  average([9, 47, 23, 95, 16, 52]);    // 40
Data Structure:
  Input - array
  Output - number literal
  Array methods could be useed
Algorithm:
  - Get the length of the array and store it in a variable named 'length'
  - Add all the elements of the array together and divide by the 'length'
  - Return the results
*/

const average = arr => {
  let length = arr.length;
  
  let sum = arr.reduce((a, b) => a + b, 0);
  
  return Math.floor(sum / length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40