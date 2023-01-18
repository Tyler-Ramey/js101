function getGrade (x, y, z) {
  let avg = (x + y + z) / 3;
  
  if (avg <= 100 && avg >= 90) return 'A';
  if (avg < 90 && avg >= 90) return 'B';
  if (avg < 80 && avg >= 70) return 'C';
  if (avg < 70 && avg >= 60) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"