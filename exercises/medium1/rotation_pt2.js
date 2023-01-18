function rotateRightmostDigits (number, count) {
  let strNumber = String(number);
  let firstPart = strNumber.slice(0, strNumber.length - count);
  let lastPart = strNumber.slice(-count);
  let rotatedLastPart = lastPart.slice(1).concat(lastPart[0]);
  let rotatedNum = firstPart + rotatedLastPart;
  
  return Number(rotatedNum);
} 

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
  