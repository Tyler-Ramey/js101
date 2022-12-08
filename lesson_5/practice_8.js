let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

let objArr = Object.values(obj);

objArr.forEach(subArr => {
  subArr.forEach(str => {
    let strArr = str.split('');
    strArr.forEach(char => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    })
  })
});