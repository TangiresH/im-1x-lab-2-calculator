const fs = require('fs');

function writeToFile(filename, content) {
    fs.writeFileSync(filename, content);
    console.log(`Result has been written to ${filename}: ${content}`);
}

module.exports = writeToFile;
