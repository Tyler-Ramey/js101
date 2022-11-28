const integerToString = number => {
  const CHARS = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };
  
  let string = '';
  
  do {
    let remainder = number % 10; // Getting each ones digit
    number = Math.floor(number / 10);
    string = CHARS[remainder] + string;
  } while (number > 0);
  
  return string;
};

const signedIntegerToString = number => {
  let sign = Math.sign(number);
  let string = integerToString(Math.abs(number));
  
  if (sign === -1) {
    return '-' + string;
  } else if (sign === 1) {
    return '+' + string;
  } else {
    return string;
  }
};

//console.log(typeof(integerToString(4321)));        // "4321"
//console.log(typeof(integerToString(0)));           // "0"
//console.log(typeof(integerToString(5000)));        // "5000"
//console.log(typeof(integerToString(1234567890)));  // "1234567890"
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");