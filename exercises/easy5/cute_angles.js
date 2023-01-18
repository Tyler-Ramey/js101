/*
Write a function that takes a float that represents an angle and 
converts it to a string that represents the angle, minutes, and seconds

To get angle minutes seconds use:
  - degree = integer part of float => 75.50 = 75 degrees
  - minutes = decimal degrees - degrees * 60 => (75.50 - 75) * 60
  - seconds = (decimal degrees - degrees - minutes / 60) * 3600
  
Data structure - primatives
Algorithm
  - Get the 'degree' by taking the whole number portion of the number
  - Get the 'minutes' by (num - degrees) * 60
  - Get the 'seconds' by (num - degrees - minutes / 60) * 3600
  - Convert the numbers to a string and add the ˚ ' and "
  - Return string
*/
const padZero = num => {
  let numString = String(num);
  return numString.length < 2 ? `0${numString}` : numString;
}

function dms(angle) {
  const MIN_IN_DEGREE = 60;
  const SEC_IN_MIN = 60;
  const SEC_IN_DEGREE = 3600;
  
  
  let degree = Math.floor(angle);
  let min = Math.floor((angle - degree) * MIN_IN_DEGREE);
  let sec = Math.floor((angle - degree - min/SEC_IN_MIN) * SEC_IN_DEGREE);
  
  return `${degree}˚${padZero(min)}'${padZero(sec)}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"