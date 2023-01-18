function swap (string) {
  let swapArr = [];
  let stringArr = string.split(' ');
  
  stringArr.forEach(word => {
    let swapWord = '';
    
    if (word.length === 1) swapWord = word;
    else if (word.length === 2) swapWord = word[1] + word[0];
    else swapWord = word.slice(word.length - 1) + word.slice(1, word.length - 1) + word.slice(0, 1);
    
    swapArr.push(swapWord);
  })
  
  return swapArr.join(' ');
  
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"