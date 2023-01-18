/*
Problem:
  - Make a two functions that take a given time and return the minutes before
    or after midnight depending on the function
  - Input: 24hr format time
  - Output: An integer representing the amount of min before or after midnight
  - Rules:
    - If the time is 24:00 or 00:00 return 0
Examples:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
Data Structure:
  - None
Algorithm:
  - For hours before midnight
    - Set a 'minutes' variable = to 0
    - Check if time is 00:00 or 24:00, return 0 if so
    - Get the hours portion of the time and multiply that value by 'MIN_PER_HOUR'
      - Add to the minutes variable
    - Get the minutes portion of the time and convert it to a number
      - Subtrace from the minutes variable
    - Return minutes
- For hours after midnight
    - Set a 'minutes' variable = to 0
    - Check if time is 00:00 or 24:00, return 0 if so
    - Get the hours portion of the time and multiply that value by 'MIN_PER_HOUR'
      - Add to the minutes variable
    - Get the minutes portion of the time and convert it to a number
      - Add to the minutes variable
    - Return minutes
*/
let MIN_PER_HOUR = 60;
let HOUR_PER_DAY = 24;
let MIN_PER_DAY = MIN_PER_HOUR * HOUR_PER_DAY;

function beforeMidnight(time) {
  if (time === '00:00' || time === '24:00') return 0;
  else return Number((time.slice(0,2)) * MIN_PER_HOUR) - Number(time.slice(3));
}

function afterMidnight(time) {
 if (time === '00:00' || time === '24:00') return 0;
 else return Number((time.slice(0,2)) * MIN_PER_HOUR) + Number(time.slice(3));
}

function leadingZero(arg) {
 return arg < 10 ? `0${arg}` : `${arg}`;
}

function formatTime(hours, minutes) {
  return`${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay (deltaTime) {
  if (deltaTime < 0) deltaTime = (deltaTime % MIN_PER_DAY) + MIN_PER_DAY;
  else deltaTime = deltaTime % MIN_PER_DAY;
  
  let hours = Math.floor(deltaTime / MIN_PER_HOUR);
  let minutes = deltaTime % MIN_PER_HOUR;
  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);