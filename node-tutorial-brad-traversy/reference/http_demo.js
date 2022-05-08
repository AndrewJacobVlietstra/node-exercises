const http = require('http');

// Create server object
http.createServer((req, res) => {
  // Write a response
  res.write('Hello From Node.js');
  res.end();
}).listen(5000, () => console.log('Server running...'));