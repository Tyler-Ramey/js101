const penultimate = string => {
  let stringArr = string.split(' ');
  return stringArr[(stringArr.length - 2)];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true