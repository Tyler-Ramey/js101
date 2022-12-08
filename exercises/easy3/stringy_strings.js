const stringy = length => {
  let string = '';
  let digit = '1';
  while (length > 0) {
    if (digit === '1') {
      string += '1';
      digit = '0';
    } else {
      string += '0';
      digit = '1';
    }
    
    length -= 1;
  }
  
  console.log(string);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(10);    // "1010101"