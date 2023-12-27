const fs = require('fs');
const path = require('path');
const { parse, validateInput } = require('./components/parse');

describe('parse function', () => {
    test('test-input-file-1.txt should return expected result', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-1.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["5", "1", "+", "4", "9", "="]);
      });

      test('test-input-file-2.txt should return expected result', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-2.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["1", "0", "0", "/", "2", "5", "="]);
      });

      test('test-input-file-3.txt should return expected result', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-3.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["1", "6"]);
      });

      test('test-input-file-4.txt should return expected result', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-4.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["5", "0", "5", "*", "4", "5", "5"]);
      });

      test('test-input-file-5.txt should return expected result', () => {
        const inputFilePath = path.join(__dirname, './test-inputs/test-parse/test-input-file-5.txt');
        const inputString = fs.readFileSync(inputFilePath, 'utf-8');
        expect(parse(inputString)).toEqual(["2", "5", "-", "1", "0", "="]);
      });
  });