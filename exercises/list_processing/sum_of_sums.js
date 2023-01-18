/*
Problem:
  - Write a function that takes an array of numbers and returns the sum of the
    sums of each leading subsequence
  - Input: an array of numbers
  - Output: a number, the sum of all sums
  - Rules:
    - Argument will always contain at least one number

Examples:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

Data Stucture:
  - Array
  
Algorithm:
  - Set a variable 'sumOfSums' to 0
  - Seperate the array of nums into subarrays of each group ([3, 5, 2] => [[3], [3, 5], [3, 5, 2]])
  - Sum each of the subarrays each time add that value to the 'sumOfSums'
  - Return 'sumOfSums'
*/

function sumOfSums(arr) {
  let sumOfSums = 0;
  let subArrs = [];
  
  for (let idx = 1; idx <= arr.length; idx += 1) {
    subArrs.push(arr.slice(0, idx));
  }
  
  subArrs.forEach(arr => {
    sumOfSums += arr.reduce((a, b) => a + b);
  })
  
  return sumOfSums;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35