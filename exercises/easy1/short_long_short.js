/* PEDAC
Problem
 Write a function that takes two strings as arguments, determines the 
 length of the two strings, and then returns the result of concatenating 
 the shorter string, the longer string, and the shorter string once again.
 You may assume that the strings are of different lengths.
Example/Test Case
  shortLongShort('abc', 'defgh');    // "abcdefghabc"
  shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
  shortLongShort('', 'xyz');         // "xyz"
Data Structure
  String primative
  Array of strings, join them
Algorithm
  GET strings
  GET string length
  IF str1.length > str2.length
    catStr = str1 + str2 + str1
  ELSE 
    catStr = str2 + str1 + str2
*/

const shortLongShort = (string1, string2) => {
  if (string1.length > string2.length) {
    return string2 + string1  + string2;
  } else
    return string1 + string2 + string1;
};

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));