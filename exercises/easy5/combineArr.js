/*
Given two arrays, return the combination of those arrays with no duplicates

Rules
  - If original array contains duplicates, remove them. No duplicates in return arr
  - Both arguments will be an array
  
Data Structure
  - Arrays
  - Input - two arrays of numbers
  - Output - combined array of the previous two with no duplicates
  
Algorithm
  - Set resultArr the combination of both arrays
  - For each number of the array
    - Check to see if that number exists in the array elsewhere
      - If it does, pop that number from the array
      - Else, continue
  - Sort the results array
  - Return the results array
*/

const union = (arr1, arr2) => {
  let combinedArr = arr1.concat(arr2);
  let resultArr = [];
  
  for (let idx = 0; idx < combinedArr.length; idx ++) {
    if (resultArr.includes(combinedArr[idx])) continue;
    
    resultArr.push(combinedArr[idx]);
  }
    
  return resultArr.sort((a, b) => a - b);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 5, 7, 9], [2, 3, 6, 9, 3, 4, 10])); 