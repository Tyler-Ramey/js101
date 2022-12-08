let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let arrCopy = JSON.parse(JSON.stringify(arr));

arrCopy.forEach(subArr => {
  if (typeof subArr[0] === 'number') {
    subArr.sort((a,b) => a - b);
  } else {
    subArr.sort();
  }
})

console.log(arr);
console.log(arrCopy);
