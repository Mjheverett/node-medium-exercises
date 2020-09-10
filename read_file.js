'use strict'

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Filename: ', (filename) => {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    })
    rl.close();
});