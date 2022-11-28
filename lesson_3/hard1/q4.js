function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  } else {
    return false;
  }

  return true;
}

console.log(isDotSeparatedIpAddress('25.25.25.25'));
console.log(isDotSeparatedIpAddress('25.25.25'));
console.log(isDotSeparatedIpAddress('25.25.25.25.25'));
console.log(isDotSeparatedIpAddress('278.999.999.999'));