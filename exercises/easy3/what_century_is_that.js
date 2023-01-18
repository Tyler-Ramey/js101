function catchTheTh (lastTwoDigits) {
  return lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13;
}

function getSuffix (centuryNumber) {
  if (catchTheTh(centuryNumber % 100)) return 'th';
  
  let lastDigit = centuryNumber % 10;
  
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function century (year) {
  let centuryNumber = Math.floor(year / 100) + 1;
  
  if (year % 100 === 0) centuryNumber -= 1;
  
  return String(centuryNumber) + getSuffix(centuryNumber);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"