const xor = (x, y) => ((x || y) && !(x && y));

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));