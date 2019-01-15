'use strict';

const articler = require('./../articler-modules.js');
const splitIntoNestedArray =  articler.splitIntoNestedArray;
const handleHeader =  articler.handleHeader;
const handleParagraph =  articler.handleParagraph;
const recombineNestedArrays =  articler.recombineNestedArrays;
const alterData =  articler.alterData;


describe ('articler program functions', ()=>{

  it('takes a buffer and returns a nested array', ()=> {

    let testString = 
    `How does pair programming work?
    While there are many different styles...
    
    Why pair program?
    While learning to code, developers...`;

    let buffer = Buffer.from(testString);
    let result = splitIntoNestedArray(buffer);

    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toBeInstanceOf(Array);
  });

  it('correctly handles h3 headers', ()=> {

    let testH3 = `2. test header that shoudl be h3`;

    let result = handleHeader(testH3);

    let expected = `<h3>${testH3}</h3>`;

    expect(result).toEqual(expected);
  });

  it('correctly handles h2 headers', ()=> {

    let testH2 = `Header that should be h2`;

    let result = handleHeader(testH2);

    let expected = `<h2>${testH2}</h2>`;

    expect(result).toEqual(expected);
  });

  it('correctly splits paragraphs', ()=> {

    let testP = `Sentence1. Sentence2. Sentence3.`;
    let expected = `<li>Sentence1.</li><li>Sentence2.</li><li>Sentence3.</li>`;

    let result = handleParagraph(testP);

    expect(result).toEqual(expected);
  });

  it('correctly recombines nested arrays', ()=> {

    let testNested = [
      ['e11','e12','e13'],
      ['e21','e22','e23'],
      ['e31','e32','e33'],
    ];
    let expected = 
    `e11\ne12\ne13\n\ne21\ne22\ne23\n\ne31\ne32\ne33`;

    let result = recombineNestedArrays(testNested);

    expect(result).toEqual(expected);
  });

  it('overall works', ()=> {
    let expectedString = require('./expected.js');

    let testString = require('./test-text.js');
    let testStringBuffer = Buffer.from(testString);
    let resultString = alterData(testStringBuffer).toString();

    expect(resultString).toEqual(expectedString);
  });

});