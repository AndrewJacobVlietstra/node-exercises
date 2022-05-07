const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, err => {
  if (err) {
    throw err;
  }
  console.log("Folder created!");
});


// Create and write to file, overwrites whole file
fs.writeFile(path.join(__dirname, "/test", 'hello.txt'), 'Hello world!', err => {
  if (err) {
    throw err;
  }
  console.log("File written to!");

//   // Append to file
  fs.appendFile(path.join(__dirname, "/test", 'hello.txt'), 'Node.js is awesome!', err => {
    if (err) {
      throw err;
    }
    console.log("File written to!");
  });
});

// Read file
fs.readFile(path.join(__dirname, "/test", 'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log("File read!");
  console.log(data);
});


// Rename file
fs.rename(path.join(__dirname, "/test", 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), err => {
  if (err) {
    throw err;
  }
  console.log("File renamed!");
});