'use strict'

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input File: ', (inputFile) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            rl.close();
            return;
        }
        rl.question('Output File: ', (outputFile) => {
            rl.close();
            fs.writeFile(outputFile, data.toUpperCase(), err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Wrote to file:', outputFile);
            })
        })
    })
});