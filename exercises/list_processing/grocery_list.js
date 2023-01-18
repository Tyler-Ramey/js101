/*
Problem:
  - Write a function that takes a nested array and returns a flat array. Each
    element of the nested array contains a fruit and a number that represents
    how many of that item is needed. Output array should have that type of fruit
    repeated however many times the number says
  - Input: a nested array of a fruit name and how many of the fruit is needed
  - Output: an array with fruit names and with the correct quantities
  - Rules:
    - The number represents the quantity needed

Examples:
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

Data structure:
  - Array and nested arrays
  
Algorithm:
  - Set a 'groceryList' variable to an empty array
  - For each of the subarrays
    - Push the fruit to the 'groceryList' the amount of times listed
  - Return 'groceryList'
*/

function buyFruit(arr) {
  let groceryList = [];
  
  arr.forEach(subarr => {
    let fruit = subarr[0];
    let amount = subarr[1];
    
    while (amount > 0) {
      groceryList.push(fruit);
      amount --;
    }
  });
  
  return groceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));