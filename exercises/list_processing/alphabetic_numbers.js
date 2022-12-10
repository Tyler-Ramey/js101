const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
const alphabeticNumberSort = arr => {
  let wordArr = [];
  
  arr.forEach(number => wordArr.push(NUMBER_WORDS[number]));
  wordArr.sort();
  arr = wordArr.map(numWord => {
    let index = NUMBER_WORDS.indexOf(numWord);
    return arr[index] = index;
  })
  return arr;
}
console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]