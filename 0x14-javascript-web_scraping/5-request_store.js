#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filepath = process.argv[3];

request.get(url, (error, response, content) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filepath, content, 'utf-8', (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`file saved to ${filepath}`);
      }
    });
  }
});
