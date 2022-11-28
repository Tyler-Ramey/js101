let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

flintstones = [].concat(...flintstones);
console.log(flintstones);

flintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(flintstones);

let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});
console.log(flintstones);

newFlintstones = flintstones.flat();
console.log(flintstones);