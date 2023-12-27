function parse(inputString) {
    if (!validateInput(inputString)) {
        return null;
    }

    const inputArray = inputString.split(' ');

    for (let i = 0; i < inputArray.length; i++) {
        const token = inputArray[i];
        if (!/^[0-9+\-*\/=]$/.test(token)) {
            console.log("Invalid input: Unexpected character - " + token);
            return null;
        }
    }

    return inputArray;
}

function validateInput(inputString) {
    if (inputString === '') {
        console.log("Empty input file. Writing 0 to output.txt");
        return [0];
    }

    if (inputString.includes('\n')) {
        console.error("Invalid input: Data should be in one line");
        return null;
    }

    if (inputString.includes('  ')) {
        console.error("Invalid input: Multiple consecutive spaces are not allowed");
        return null;
    }

    return true;
}

module.exports = {
    parse,
    validateInput
};