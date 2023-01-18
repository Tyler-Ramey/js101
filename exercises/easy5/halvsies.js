/*
Problem:
  - Write a function that takes an array and returns an array containing two
      subarrays. Put half of the original array elements into the first and the 
      other half in the second array
  - Rules:
    - If the arg array contains odd number of elements, put the middle element
        in the first half array
    - If arg is an empty array, return two empty arrays
    - If arg only has one elements, place first element in first arr and return
        first array and an empty array
Test Case:
  halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
  halvsies([5]);                // [[5], []]
  halvsies([]);                 // [[], []]
Data Structure:
  Array
  input - an array of any length
  output - an array containing two arrays. Each subarray contains half of the
              original array
Algorithm:
  - Set 'frontHalf' and 'backHalf' to empty arrays
  - If arg array contains 0 elements, return 'frontHalf' and 'backHalf' empty
  - If arg array contains 1 element
    - Push element to 'frontHalf' and return 'frontHalf' and 'backHalf'
  - Check if the length of arg array is even or odd
  - If even
    - Iterate through the array, on each iteration until the middle point palce
        the current element into the 'frontHalf'
    - Once middle point is reached
      - Place remaining elements in 'backHalf'
  - If odd
    - Iterate through the array, place each element in 'frontHalf' up to and 
        including the middle point
    - Place remaining elements in 'backHalf'
  - Return a combined array of 'frontHalf' and 'backHalf'
*/

function halvsies(arr) {
  let frontHalf = [];
  let backHalf = [];
  
  if (arr.length === 0) return [ frontHalf, backHalf ];
  if (arr.length === 1) {
    frontHalf.push(arr[0]);
    return[ frontHalf, backHalf ];
  }
  
  if (arr.length % 2 === 1) {
    arr.forEach((element, idx) => {
      if (idx <= Math.floor(arr.length / 2)) frontHalf.push(arr[idx]);
      else backHalf.push(arr[idx]);
    });
  } else {
    arr.forEach((element, idx) => {
      if (idx < Math.floor(arr.length / 2)) frontHalf.push(arr[idx]);
      else backHalf.push(arr[idx]);
    });
  }
  
  return [ frontHalf, backHalf ];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
console.log(halvsies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))