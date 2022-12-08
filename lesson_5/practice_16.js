let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {}
let obj2 = Object.fromEntries(arr);

arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];
  
  obj[key] = value;
})

console.log(obj)
console.log(obj2)
// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }