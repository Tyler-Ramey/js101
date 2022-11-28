const multiply = (x, y) => x * y;

const square = number => multiply(number, number);

const toThePowerOfN = (number, power) => {
  let result = 1;
  for (let count = 1; count <= power; count += 1) {
    result = multiply(number, result);
  }
  
  return result;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(toThePowerOfN(5, 2));
console.log(toThePowerOfN(5, 3));
console.log(toThePowerOfN(5, 4));