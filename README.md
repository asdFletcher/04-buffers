![CF](http://i.imgur.com/7v5ASc8.png) LAB 03: Buffers
=================================================


### Author: Fletcher LaRue
* worked with George and Michael

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/04-buffers.svg?branch=master)](https://www.travis-ci.com/asdFletcher/04-buffers)

* [repo](https://github.com/asdFletcher/04-buffers)
* [travis](https://www.travis-ci.com/asdFletcher/04-buffers)

--- 

---
Description:
This project involves reading and writing data to and from files using buffers. In the first exercise data is written in string form, converted to a buffer and written to a file using Node.js file system 'fs'. The second exercise takes data from a given text file, parses it and makes changes it (in this case, adding various HTML tags), and then writes it back to the same file.

---
### Files
#### `index.js`
#### `articler.js`
---
##### Exported Values and Methods for the following files:

There are no explicitly exported modules, but the functionality can be used or changed by running the two JavaScript files:

#### `index.js`
* none
#### `articler.js`
* none
---


##### Using the following files:
The modules:




Since there are no exported modules, these files can only be used directly. For example via `node <file name>` in the terminal.

- #### `index.js` behavior is as follows:

* Generates some content as a string
* allocate a buffer (default `utf-8`)
* convert the content to a buffer via `.charCodeAt()`
* write the file using `.writeFile`

- #### `articler.js` behavior is as follows:

* Read file from a specified path (hard coded)
* call `.readFile` using Node.js's `fs`
* convert the content to a buffer via `.charCodeAt()`
* alter the data `alterData()`
* write the file using `.writeFile`
* File is over-written by any changes

---

### Testing

Test files for each module are located in the repository as follows:

// TODO: Create test files

To perform testing using jest, run the following command in the terminal from the root of a local copy of the repository:
```JavaScript
npm jest --verbose --coverage
```

It is useful to bind this command to:
```JavaScript
npm test
```

An example of the `package.json` contents that create this bind is as follows:
```Javascript
  "scripts": {
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage"
  }
```

To create a `package.json` file run:
```JavaScript
npm init
```

---

### Dependencies

* jest: `npm i jest`
* Node.js included filesystem: `require('fs')`



### Setup
#### `.env` requirements
* n/a


#### Tests
TODO: Fill in the following
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
