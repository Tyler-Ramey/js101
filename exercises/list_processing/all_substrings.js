/*
Problem:
  - Write a function that returns a list of all substrings from a given string
  - Input: a string
  - Output: an array of all substring of the string
  - Rules:
    - should use leadingSubstrings function
    - substrings should start with index 0 and then index 1, etc
    - smallest to largest based on the first index
Examples:
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  
Data Structure:
  - Array
  
Algorithm:
  - Set a variable 'allSubstrings' to an empty array
  - Send a copy of the string to 'leadingSubstrings' and concat that result with
    'allSubstrings'
  - Continue the step above but on each iteration send a copy starting at the next index
*/

const leadingSubstrings = string => {
  let substringArr = [];
  
  for (let idx = 1; idx <= string.length; idx += 1) {
    substringArr.push(string.slice(0, idx));
  }
  
  return substringArr;
};

const substrings = string => {
  let allSubstrings = [];
  
  for (let start = 0; start < string.length; start += 1) {
    allSubstrings = allSubstrings.concat(leadingSubstrings(string.slice(start, string.length)));
  }
  
  return allSubstrings;
}

console.log(substrings('abcde'));