// Write a program that will ask for user's name. The program will 
// then greet the user. If the user writes "name!" then the computer yells back to the user.

let rlsync = require("readline-sync");

function getUserName() {
  let name = rlsync.question('What is your name?\n> ');
  return name;
}

function greetUser(name) {
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.substr(0, (name.length - 1))}! WHY ARE WE SCREAMING?????`);
  } else {
    console.log(`Hello ${name}`);
  }
}

let name = getUserName();
greetUser(name);