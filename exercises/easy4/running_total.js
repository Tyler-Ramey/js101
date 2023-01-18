/*
Problem
  Write a function that takes an array of numbers and returns an array with the 
  same number of elements, but with each element's value being the running total
  from the original array
  
  Rules:
    If array is empty or contains one digit, return the array
    Array processed from left to right
Examples/Test
  runningTotal([2, 5, 13]);             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
  runningTotal([3]);                    // [3]
  runningTotal([]);                     // []
Data Structure
  Arrays, likely map methods
Algorithm
  Check the array to see how many items are in it, if it is empty or contains
    only one num, return that array
  Iterate over each array, make the first element the initial accumulator value
    and return it
  On each run after the first, increase the accumulator value by the element in the
    array and return the accumulator value
*/

function runningTotal (arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  
  let accum = 0;
  let runningTotalArr = arr.map(num => {
    accum += num;
    return accum;
  })
  
  return runningTotalArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []