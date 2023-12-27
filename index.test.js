const fs = require('fs');
const path = require('path');
const { parse, validateInput } = require('./components/parse');
const handleKeyPress = require('./components/handleKeyPress');
const writeToFile = require('./components/writeToFile');



describe('Input functions', () => {
  describe('Parse function', () => {
    test('should return the expected result for test-input-file-5.txt', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-1.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["5", "1", "+", "4", "9", "="]);
      });

      test('should return the expected result for test-input-file-5.txt', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-2.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["1", "0", "0", "/", "2", "5", "="]);
      });

      test('should return the expected result for test-input-file-5.txt', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-3.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["1", "6"]);
      });

      test('should return the expected result for test-input-file-5.txt', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-4.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["5", "0", "5", "*", "4", "5", "5"]);
      });

      test('should return the expected result for test-input-file-5.txt', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-5.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["2", "5", "-", "1", "0", "="]);
      });
    });
    
  });
  
  
  describe('Parse function', () => {

      test('should return null and log an error message for input with unexpected characters', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-1.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = parse(inputString);
        expect(result).toBeNull();
      });

      test('should return [0] for an empty input string', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-2.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toEqual([0]);
      });

      test('should return null for input with newlines', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-3.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toBeNull();
      });

      test('should return null for input with multiple consecutive spaces', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-4.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toBeNull();
      });

      test('should return null for input with more than one operator', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-5.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toBeNull();
      });

      test('should return true for input with only numbers and spaces', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-6.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toBe(true);
      });

      test('should return true for input with valid operator and format', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-validateInput/test-input-file-7.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        const result = validateInput(inputString);
        expect(result).toBe(true);
      });

    });

    describe('handleKeyPress function', () => {
      let calculatorState;

      beforeEach(() => {
        calculatorState = {
          screen: 0,
          op: null,
          first_number: null,
          start_second_number: false,
        };
      });

      test('should set operator and start second number when pressing + key', () => {
        handleKeyPress(calculatorState, '+');
        expect(calculatorState.op).toEqual('+');
        expect(calculatorState.start_second_number).toBe(true);
        expect(calculatorState.first_number).toEqual(calculatorState.screen);
      });

      test('should handle numeric key when start_second_number is true', () => {
        calculatorState.start_second_number = true;
        handleKeyPress(calculatorState, '5');
        expect(calculatorState.screen).toBe(5);
        expect(calculatorState.start_second_number).toBe(false);
      });

      test('should handle numeric key when start_second_number is false', () => {
        handleKeyPress(calculatorState, '3');
        expect(calculatorState.screen).toBe(3);
      });

      test('should handle invalid key', () => {
        handleKeyPress(calculatorState, 'A');
        expect(calculatorState.screen).toBe(0);
      });

      test('should handle operator key with valid screen value', () => {
        calculatorState.screen = 7;
        handleKeyPress(calculatorState, '-');
        expect(calculatorState.op).toBe('-');
        expect(calculatorState.start_second_number).toBe(true);
        expect(calculatorState.first_number).toBe(7);
      });

      test('should handle numeric keys sequentially', () => {
        handleKeyPress(calculatorState, '1');
        handleKeyPress(calculatorState, '2');
        handleKeyPress(calculatorState, '3');
        expect(calculatorState.screen).toBe(123);
      });

      test('should handle a complex expression with + and = keys', () => {
        handleKeyPress(calculatorState, '1');
        handleKeyPress(calculatorState, '+');
        handleKeyPress(calculatorState, '2');
        handleKeyPress(calculatorState, '=');
        expect(calculatorState.screen).toBe(3);
      });

      test('should handle a complex expression with - and = keys', () => {
        handleKeyPress(calculatorState, '7');
        handleKeyPress(calculatorState, '-');
        handleKeyPress(calculatorState, '2');
        handleKeyPress(calculatorState, '=');
        expect(calculatorState.screen).toBe(5);
      });

      test('should handle a complex expression with * and = keys', () => {
        handleKeyPress(calculatorState, '3');
        handleKeyPress(calculatorState, '*');
        handleKeyPress(calculatorState, '4');
        handleKeyPress(calculatorState, '=');
        expect(calculatorState.screen).toBe(12);
      });

      test('should handle a complex expression with / and = keys', () => {
        handleKeyPress(calculatorState, '1');
        handleKeyPress(calculatorState, '0');
        handleKeyPress(calculatorState, '/');
        handleKeyPress(calculatorState, '2');
        handleKeyPress(calculatorState, '=');
        expect(calculatorState.screen).toBe(5);
      });

      test('should handle invalid key', () => {
        const inputFilePath = path.join(__dirname, './test-keypress/test-input-file-1.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8').trim();
        const inputKeys = inputString.split(' ');
    
        for (const key of inputKeys) {
          handleKeyPress(calculatorState, key);
        }
    
        expect(calculatorState.screen).toBe(0);
      });

      test('should handle numeric key when start_second_number is true', () => {
        const inputFilePath = path.join(__dirname, './test-keypress/test-input-file-2.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8').trim();
        const inputKeys = inputString.split(' ');
    
        for (const key of inputKeys) {
          handleKeyPress(calculatorState, key);
        }
    
        expect(calculatorState.screen).toBe(33);
      });

      test('should handle empty file input', () => {
        const inputFilePath = path.join(__dirname, './test-keypress/test-input-file-3.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8').trim();
        const inputKeys = inputString.split(' ');
    
        for (const key of inputKeys) {
          handleKeyPress(calculatorState, key);
        }
    
        expect(calculatorState.screen).toBe(0);
        expect(calculatorState.op).toBeNull();
        expect(calculatorState.first_number).toBeNull();
        expect(calculatorState.start_second_number).toBe(false);
      });

    
    });

    describe('writeToFile function : ', () => {

      test('The function must correctly write the result to a file', () => {
        const first_result = '15';
        writeToFile('test-outputs/test-output-file-1.txt', first_result);
        const content = fs.readFileSync('./test-outputs/test-output-file-1.txt', 'utf-8').trim();
        expect(content).toBe('15');
      });

      test('The function must correctly write the result to a file', () => {
        const first_result = '70';
        writeToFile('test-outputs/test-output-file-1.txt', first_result);
        const content = fs.readFileSync('./test-outputs/test-output-file-2.txt', 'utf-8').trim();
        expect(content).toBe('70');
      });
  })