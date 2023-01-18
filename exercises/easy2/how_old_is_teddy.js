function randomBetween(min, max) {
  
  if (min > max) {
    let minCopy = min;
    min = max;
    max = minCopy;
  }
  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);