/* PEDAC
Problem
  Write a function that returns whether a given year is a leap year
  Leap years are evenly divisible by 4, unless they are evenly divisible by 100
  If divisible by 100 it is not a leap year unless divisible by 400
Example/Test Case
  Below
Data Structure
  boolean, primatives
Algorithm
  IF year % 4 === 0
    IF year % 100 !== 0 > true
    ELSE year % 400 === 0 > true
    */
// Solution starting with 4. Complicated
/*
const isLeapYear = year => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(true);
      } else {
        console.log(false);
      }
    } else {
      console.log(true);
    }
  } else {
    console.log(false);
  }
};
*/

function isLeapYear(year) {
  if (year >= 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
