let munstersDescription = "The Munsters are creepy and spooky.";
let newString = '';

for (let char of munstersDescription) {
  if (char === char.toUpperCase()) {
    newString += char.toLowerCase();
  } else {
    newString += char.toUpperCase();
  }
}

console.log(newString);