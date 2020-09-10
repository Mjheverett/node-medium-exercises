'use strict'

const dns = require('dns');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain Name: ', (domainName) => {
    dns.lookup(domainName, (err, address) => {
        if (err) {
            console.log(err);
        }
        console.log('IP Address: ', address);
    })
    rl.close();
});