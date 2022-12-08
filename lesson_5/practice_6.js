let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersDetails = Object.entries(munsters);

munstersDetails.forEach(member => {
  console.log(`${member[0]} is a ${member[1].age}-year-old ${member[1].gender}`);
});
