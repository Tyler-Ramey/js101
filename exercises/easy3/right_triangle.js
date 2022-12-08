function triangle(size) {
  let str = '*';
  console.log(typeof str)
  
  for (let x = 1; x <= size; x += 1) {
    console.log(str.padStart(size, ''));
    str += '*';
  }
}

triangle(5);
triangle(9);