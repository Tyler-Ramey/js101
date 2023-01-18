/*
Problem:
  - Write a function that returns a list of all palindromic substrings of a string.
    A string that reads the same forwards and backwards
  - Input: a string
  - Output: an array of palindromic substrings
  - Rules:
    - Substrings are case sensitive
      - AbcbA is a palindrom, Abcba is not
    - Should use substrings function
    - Ordered in the order of appearance
    - Duplicates should be included multiple times
Examples:
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Data Structure:
  - Array for output

Algorithm:
  - Get all substrings of the string by calling substrings
  - On the returned array, filter each substring to see if it is the same in reverse
  - Place the items that pass that test in a different array 
  - Return the filtered array
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
};

const palindromes = string => {
  let allSubstrings = substrings(string);
  
  let palindromicSubstrings = allSubstrings.filter(substr => {
    let reversedSubstr = substr.split('').reverse().join('');
    return substr === reversedSubstr;
  })
  
  palindromicSubstrings = palindromicSubstrings.filter(substr => substr.length > 1);
  
  return palindromicSubstrings;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]