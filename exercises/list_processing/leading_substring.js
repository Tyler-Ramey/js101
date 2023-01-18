/*
Problem:
  - Write a function that takes a string and returns a list of substrings
  - Inupt: a string
  - Output: an array of substrings
  - Rules:
    - substrings should begin with first letter
    - array should be ordered from shortest to longest
    - single characters should be returned in an array

Examples:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Data Structure:
  - Array for output
  
Algorithm:
  - Set a variable 'substringArr' to an empty array
  - For each character of the string
    - create a substring starting with the first character and ending with the first character
      - On each iteration, increase which charater the substring ends on
    - Push the substring to the array
  - Return results
*/

const leadingSubstrings = string => {
  let substringArr = [];
  
  for (let idx = 1; idx <= string.length; idx += 1) {
    substringArr.push(string.slice(0, idx));
  }
  
  return substringArr;
};

const leadingSubstrings2 = string => {
  
  let stringArr = string.split('');
  
  return stringArr.map((_, idx) => {
    return stringArr.slice(0, idx + 1).join('');
  })
}

console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings2('a'));        // ["a"]
console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]