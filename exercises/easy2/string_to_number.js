function stringToInteger(string) {
  return +string;
}

function hexadecimalToInteger(hexString) {
  const DIGITS = {
    0: 0, 1: 1, 2: 2,
    3: 3, 4: 4, 5: 5,
    6: 6, 7: 7, 8: 8,
    9: 9, A: 10, B: 11,
    C: 12, D: 13, E: 14,
    F: 15,
  };
  
  hexString = hexString.toUpperCase();
  let exponent = hexString.length - 1; // Starting exponent is one less than length of string
  let arrayOfDigits = hexString.split('').map(char => DIGITS[char]);
  let value = 0;
  
  arrayOfDigits.forEach(digit => {
    value += digit * (16 ** exponent);
    exponent -= 1;
  });
  
  return value;
}

//console.log(stringToInteger("4321") === 4321); // logs true
//console.log(stringToInteger("570") === 570); // logs true
console.log(hexadecimalToInteger('FFFFFF'));
console.log(hexadecimalToInteger('a5c16'));
console.log(hexadecimalToInteger('4D9f'));