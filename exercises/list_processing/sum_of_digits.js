/*
Promblem
Write a function that takes one argument, a positive integer, and returns the 
sum of its digits. Do this without using for, while, or do...while loops 
- instead, use a series of method calls to perform the sum.
Questions: Can the arg be 0?          
           How to handle empty args?
Example/Test: Listed
Data Stucture: primative
Algorithm:
  Convert number to string
  Split the string
  Reduce the splited string and make each element a number
*/

function sum(number) {
  let sum = number.toString()
                  .split('')
                  .reduce((sum, next) => Number(sum) + Number(next));
                  
  console.log(sum);
}
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45