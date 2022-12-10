function multiplyAllPairs(arr1, arr2) {
  let productArr = [];
  
  arr1.forEach(arr1Num => {
    arr2.forEach(arr2Num => {
      let product = arr1Num * arr2Num;
      productArr.push(product);
    })
  })
  
  return productArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]