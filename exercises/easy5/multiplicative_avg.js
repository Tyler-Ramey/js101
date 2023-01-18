function multiplicativeAverage(arr) {
  let product = arr.reduce((accum, value) => accum * value, 1);
  
  let avg = product / arr.length;
  
  return `${avg.toFixed(3)}`;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"