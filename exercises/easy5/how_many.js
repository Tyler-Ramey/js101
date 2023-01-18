/*
Problem
  - Write a function that counts the number of occurrences of each element in
      a given array. Once counted, log each element and the number of occurences
  - Input - an array of strings
  - Output - text to console of the string and number of occurences of each
  - Rules:
    - Strings are case sensitive ie suv !== SUV
Examples:
  let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
  car => 4
  truck => 3
  SUV => 1
  motorcycle => 2
Data Structure:
  - Array for input
  - Use object to hold data of number of occurences
Algorithm:
  - Set a 'result' variable to an empty object
  - For each string in the array
    - Check to see if the string has a property inside the object
      - If it does exist, increast the value by 1
      - If it does not exist, create the property and set it to 1
  - Return result
*/

function countOccurrences(arr) {
  let result = {};
  
  arr.forEach(string => {
    if (result.hasOwnProperty(string)) result[string] += 1;
    else result[string] = 1;
  });
  
  result = Object.entries(result);
  
  result.forEach(subarr => {
    console.log(`${subarr[0]} => ${subarr[1]}`)
  })
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
