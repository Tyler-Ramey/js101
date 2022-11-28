const string = 'The Flintstones Rock';

for (let i = 0; i <= 10; i += 1) {
  console.log(string.padStart(string.length + i)); 
}