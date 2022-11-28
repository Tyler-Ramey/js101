function oddities(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 2) {
    newArray.push(array[index]);
  }
  
  return newArray;
}

function oddities2(array) {
  let newArray = [];
  array.forEach(index => {
    if (index % 2 === 1) {
      newArray.push(array[index]);
    }
  })
  
  return newArray;
}


console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities2(["abc", "def"])); // logs ['abc']
console.log(oddities2([123])); // logs [123]
console.log(oddities2([])); // logs []