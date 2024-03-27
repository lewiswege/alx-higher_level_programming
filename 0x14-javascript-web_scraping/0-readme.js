#!/usr/bin/node
const fs = require('fs');
const filepath = process.argv[2];

fs.readFile(filepath, 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});
