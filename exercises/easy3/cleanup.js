function cleanUp (string) {
  let regex = /[^a-z]/gi;
  
  return string.replace(regex, ' ').replace(/\s+/gi, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line ")