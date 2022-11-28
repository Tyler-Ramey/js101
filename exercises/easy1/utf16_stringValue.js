/* PEDAC
Problem
  Write a function that determines and returns the UTF-16 string value of a 
  string passed in as an argument. The UTF-16 string value is the sum of the 
  UTF-16 values of every character in the string. 
  (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

Examples/Test Case
  utf16Value('Four score');         // 984
  utf16Value('Launch School');      // 1251
  utf16Value('a');                  // 97
  utf16Value('');                   // 0
  // The next three lines demonstrate that the code
  // works with non-ASCII characters from the UTF-16
  // character set.
  const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
  utf16Value(OMEGA);                  // 937
  utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

Data Structure
  primatives
  
Algorithm
  FOR each letter of string
    utf16Sum += string.charCodeAt(letter)
  RETURN utf16Sum
*/

function utf16Value (string) {
  let utf16Sum = 0;
  let stringArray = string.split('');
  stringArray.forEach(letter => utf16Sum += letter.charCodeAt());
  
  console.log(utf16Sum);
}

function utf16Value2(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  console.log(sum);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811