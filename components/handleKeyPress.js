// handleKeyPress.js
const calculate = require('./calculate')

function handleKeyPress(calculatorState, key) {
  switch (key) {
      case '=':
          if (calculatorState.op && calculatorState.first_number !== null) {
              calculatorState.screen = calculate(calculatorState.first_number, calculatorState.screen, calculatorState.op);
              calculatorState.first_number = null;
              calculatorState.op = null;
          }
          break;
      case '+':
      case '-':
      case '*':
      case '/':
          calculatorState.op = key;
          calculatorState.start_second_number = true;
          calculatorState.first_number = calculatorState.screen;
          break;
      default:
          if (/^[0-9]$/.test(key)) {
              const digit = parseInt(key, 10);
              if (calculatorState.start_second_number) {
                  calculatorState.screen = digit;
                  calculatorState.start_second_number = false;
              } else {
                  calculatorState.screen = calculatorState.screen * 10 + digit;
              }
          }
          break;
  }
}

module.exports = handleKeyPress;
