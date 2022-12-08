function getUUID() {
  let str = '';
  for (let runs = 0; runs <= 32; runs += 1) {
    let hex = Math.floor(Math.random() * 16).toString(16);
    
    if (runs === 8) { // Adds dash after 8 runs
      str += '-' + hex;
    } else if (runs === 12) { // Adds dash after 4 more runs
      str += '-' + hex;
    } else if (runs === 16) { // Adds dash after 4 more runs
      str += '-' + hex;
    } else if (runs === 20) { // Adds dash after 4 more runs
      str += '-' + hex;
    } else {
      str += hex;
    }
    
  }
  return str;
}

console.log(getUUID())
console.log(getUUID())
console.log(getUUID())