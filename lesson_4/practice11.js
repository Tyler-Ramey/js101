let statement = "The Flintstones Rock";
let freqObj = {};

let statementArr = statement.split('').filter(char => char !== ' ');

statementArr.forEach(letter => {
  if (freqObj.hasOwnProperty(letter)) {
    freqObj[letter] += 1;
  } else {
    freqObj[letter] = 1;
  }
})

console.log(freqObj);