/*
Problem
  Write a function that takes a string consisting of zero or more space separated
  words and returns an object that shows the number of words of different sizes.
  Words consist of any sequence of non-space characters.
Examples
  wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
  wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
  wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
  wordSizes('');                                            // {} 
Data structure
  input: string
  output: object containg a count of how many words of certain length were in 
    the string
Algorithm
  Check the string to see if it is empty, if it is empty return an empty object
  If it is not empty, change the string into an array
  Itterate through the array and record the length of each element of the array
  On the first time encountering a new length, add that length as a property
    to the object with a value of 1
  On each iteration, if a length is found that already has a property, add 1 to the 
    property
    
  Once finished, return the original object
*/

function wordSizes (string) {
  let obj = {};
  
  if (string.length === 0) return obj;
  
  let stringArr = string.split(' ');
  
  stringArr.forEach(word => {
    word = word.replaceAll(/\W/g, '');
    let len = String(word.length);
    
    if (!obj.hasOwnProperty(len)) {
      obj[len] = 1;
    } else {
      obj[len] += 1;
    }
  });
  
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}