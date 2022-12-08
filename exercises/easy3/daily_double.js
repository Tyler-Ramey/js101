const crunch = string => {
  let previousChar = '';
  let crunchStr = '';
  for (let char of string) {
    if (char !== previousChar) {
      crunchStr += char;
      previousChar = char;
    }
  }
  
  console.log(crunchStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""