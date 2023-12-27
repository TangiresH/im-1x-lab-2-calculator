// calculate.js
function calculate(a, b, op) {
  switch (op) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '*':
          return a * b;
      case '/':
          if (b === 0) {
              console.error("Division by zero");
              return null;
          }
          return a / b;
      default:
          console.error("Invalid operator: " + op);
          return null;
  }
}

module.exports = calculate;
