let content = 
`'use strict';

const names = ['fletcher', 'george', 'michael'];

names.forEach( (name) => {
  console.log(name);
});`;

const fs = require('fs');

// make empty buffer, default type utf8
let bufferData = Buffer.allocUnsafe(content.length).fill(00);
console.log(bufferData);

for (let i = 0; i < content.length; i++){
  // add to empty buffer , charCodeAt gives type utf8
  bufferData[i] = content.charCodeAt(i);
}

fs.writeFile('loop.js', content, (err, test)=> {
  if(err) { throw Error(err); }
  // console.log('wrote the file');
});


