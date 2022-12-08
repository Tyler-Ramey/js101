let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let munstersArr = Object.entries(munsters);
let maleMunsersAge = []

munstersArr.map(subArr => {
  if (subArr[1]['gender'] === 'male') {
    maleMunsersAge.push(subArr[1]['age']);
  }
})

console.log(maleMunsersAge.reduce((sumAge, nextAge) => sumAge + nextAge));