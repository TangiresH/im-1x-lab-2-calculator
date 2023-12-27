// parse.js
function parse(inputString) {
  if (inputString.includes('\n')) {
      console.error("Invalid input: Data should be in one line");
      return null;
  }

  const inputArray = inputString.split(' ');

  if (inputString.includes('  ')) {
      console.error("Invalid input: Multiple consecutive spaces are not allowed");
      return null;
  }

  for (let i = 0; i < inputArray.length; i++) {
      const token = inputArray[i];
      if (!/^[0-9+\-*\/=]$/.test(token)) {
          console.error("Invalid input: Unexpected character - " + token);
          return null;
      }
  }

  return inputArray;
}

module.exports = parse;
