const fs = require('fs');
const { parse, validateInput } = require('./components/parse');
const CalculatorState = require('./components/calculatorState');
const handleKeyPress = require('./components/handleKeyPress');
const writeToFile = require('./components/writeToFile');

const inputString = fs.readFileSync('input.txt', 'utf-8').trim();
const inputArray = parse(inputString);

if (inputArray) {
    const state = new CalculatorState();

    for (let i = 0; i < inputArray.length; i++) {
        handleKeyPress(state, inputArray[i]);
    }

    const resultString = state.screen.toString();
    writeToFile('output.txt', resultString);
}
