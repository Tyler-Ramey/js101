let stack = [];
let register = 0;

function modifyStackAndRegister (command) {
  debugger;
  if (/[0-9]/.test(command)) register = Number(command);
  if (command === 'PUSH') stack.push(register);
  if (command === 'ADD') register += stack.pop();
  if (command === 'SUB') register -= stack.pop();
  if (command === 'MULT') register *= stack.pop();
  if (command === 'DIV') register = Math.round(register / stack.pop());
  if (command === 'REMAINDER') register = Math.round(register % stack.pop());
  if (command === 'POP') register = stack.pop();
  if (command === 'PRINT') console.log(register);
}

function minilang (commands) {
  let splitCommands = commands.split(' '); // Split command on spaces to parse easy
  
  splitCommands.forEach(command => modifyStackAndRegister(command));
}

minilang('PRINT'); // 0

minilang('5 PUSH 3 MULT PRINT'); // 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT'); // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');// 12

minilang('-3 PUSH 5 SUB PRINT');// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)