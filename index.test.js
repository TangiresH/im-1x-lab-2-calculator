const fs = require('fs');
const path = require('path');
const { parse, validateInput } = require('./components/parse');

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
  });