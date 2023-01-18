const twice = num => {
  num = String(num);
  
  if (num.length % 2 === 0) { // Check to see if number is even digits
    let firstDigits = num.slice(0, num.length / 2); 
    let lastDigits = num.slice(num.length / 2);
    
    if (firstDigits === lastDigits) {
      return Number(num);
    }
  }
  
  return Number(num) * 2;
};

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676