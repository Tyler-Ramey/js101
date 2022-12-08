function multiply(numbers, times) {
  numbers = numbers.map(number => number * times);

  return numbers;
}

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (currentNumber % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

function doubleOddIndex(numbers) {
  let doubledNums = []
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (index % 2 === 1) {
      doubledNums.push(numbers[index] * 2);
    } else {
      doubledNums.push(numbers[index]);
    }
  }
  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);
console.log(doubleOddNumbers(myNumbers)); // => [2, 4, 6, 14, 2, 6]
console.log(doubleOddIndex(myNumbers)); // => [1, 8, 3, 14, 2, 12]; 