'use strict';

let path = './files/pair-programming.html';

const fs = require('fs');

const alterData = require('./articler-modules.js').alterData;

//read file
fs.readFile(path, function callback(err, data) {
  if(err) {throw Error(err); }

  let newData = alterData(data);
  
  fs.writeFile(path, newData, (err, data) => {
    if(err) {throw Error(err); }
  });
});

