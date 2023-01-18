function isPalindrome(string) {
  let reverseString = string.split('').reverse().join('');
  
  return string === reverseString;
}

function isRealPalindrome(string) {
  let regex = /\W|\s/g;
  string = string.toLowerCase();
  
  string = string.replaceAll(regex, '');
  
  console.log(string);
  
  return isPalindrome(string);
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true
// console.log(isPalindrome('racecar'));  

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(0550));            // true