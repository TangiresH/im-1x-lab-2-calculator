// main.js
const fs = require('fs');
const parse = require('./components/parse');
const CalculatorState = require('./components/calculatorState');
const handleKeyPress = require('./components/handleKeyPress');

const inputString = fs.readFileSync('input.txt', 'utf-8').trim();
const inputArray = parse(inputString);

if (inputArray) {
    const state = new CalculatorState();

    for (let i = 0; i < inputArray.length; i++) {
        handleKeyPress(state, inputArray[i]);
    }

    fs.writeFileSync('output.txt', state.screen.toString());
    console.log("Result has been written to output.txt");
}
