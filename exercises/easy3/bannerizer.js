const logInBox = str => {
  let strLen = str.length;
  
  console.log(`+-${'-'.repeat(strLen)}-+`);
  console.log(`| ${' '.repeat(strLen)} |`);
  console.log(`| ${str} |`);
  console.log(`| ${' '.repeat(strLen)} |`);
  console.log(`+-${'-'.repeat(strLen)}-+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('I LOVE YOU GARRETT');