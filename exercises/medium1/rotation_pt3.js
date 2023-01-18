function rotateRightmostDigits (number, count) {
  let strNumber = String(number);
  let firstPart = strNumber.slice(0, strNumber.length - count);
  let lastPart = strNumber.slice(-count);
  let rotatedLastPart = lastPart.slice(1).concat(lastPart[0]);
  let rotatedNum = firstPart + rotatedLastPart;
  
  return Number(rotatedNum);
} 

function maxRotation (number) {
  number = String(number);
  
  for (let count = number.length; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  
  return Number(number);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845