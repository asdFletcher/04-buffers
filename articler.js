'use strict';

let path = './files/pair-programming.html';

const fs = require('fs');

//read file
fs.readFile(path, function callback(err, data) {
  if(err) {throw Error(err); }
  console.log('read the file');
  // console.log({data});

  console.log('len: ', data.length);
  console.log({data});

  let newData = alterData(data);
  
  fs.writeFile(path, newData, (err,data)=>{
    if(err) {throw Error(err); }
    console.log('successfully wrote to file');
  });
});

function alterData(data){

  let buffs = {};

  let lineBreaks = getLineBreaks(data);
  // console.log({lineBreaks});

  let doubleBreaks = getDoubleBreaks(lineBreaks);
  doubleBreaks.push(data.length);
  // console.log({doubleBreaks});

  let headers = getHeaders(lineBreaks, doubleBreaks);
  // console.log(headers);

  for(let i = 0; i < headers.length; i++){
    if (i%2 === 0){
      buffs[headers[i]] = convertToBuffer(`<h2>`);
    } else {
      buffs[headers[i]] = convertToBuffer(`</h2>`);
    }
  }

  // all bodies are greater than 1
  // locate the body by the average of its start and end index
  // buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  console.log({buffs});
  console.log({headers});
  console.log({lineBreaks});
  for (let i = 0; i < lineBreaks.length - 1; i++){

    let length = lineBreaks[i+1] - lineBreaks[i];

    let start = lineBreaks[i];

    let buffCopy = Buffer.allocUnsafe(length);

    data.copy(buffCopy,0,start,start+length);
    buffs[start+length/2] = buffCopy;

    console.log(`start: ${start} length ${length}`);

  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // console.log({buffs});

  // buffs[0] = convertToBuffer(`<article>`);             // get first index
  // buffs[data.length] = convertToBuffer(`</article>`);  // get last index
  // buffs[1] = data;

  let buffsArr = [];
  for(let key in buffs) {
    buffsArr.push([buffs[key], key]);
  }
  

  buffsArr.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log({buffsArr});

  let tempArr = [];
  buffsArr.forEach( (bufferArray) => {
    tempArr.push(bufferArray[0]);
  });

  let newData = Buffer.concat(tempArr);

  console.log({newData});
  return newData;
}

function getBodies(lineBreaks){

}

function getHeaders(lineBreaks){
  // titles are defined by length of 32 or less
  
  let headers = [];
  for (let i = 0; i < lineBreaks.length -1 ; i++){
    let diff = lineBreaks[i+1] - lineBreaks[i];
    if (diff > 5 && diff <= 32 ) {
      headers.push(lineBreaks[i]);
      headers.push(lineBreaks[i+1]);
    }
  }

  return headers;
}

function getDoubleBreaks(lineBreaks){
  let doubleBreaks = [];
  for (let i = 0; i < lineBreaks.length - 1; i++){
    if ((lineBreaks[i+1] - lineBreaks[i]) === 1){
      doubleBreaks.push(lineBreaks[i]-1);
    }
  }
  return doubleBreaks;
}

function getLineBreaks(data){
  const lineBreaks = [];

  lineBreaks.push(0); 
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i]); 
    if (data[i] === 10){
      lineBreaks.push(i);
    }
  }
  lineBreaks.push(data.length);

  // console.log({lineBreaks});
  return lineBreaks;
}


function convertToBuffer(str){
  let buff = Buffer.allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++){
    buff[i] = str.charCodeAt(i);
  }
  return buff;
}
// parse and change buffer


// save to new file


// render in browser
