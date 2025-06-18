const http = require('http');

// Define the port
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!\n');
  res.end('Hello, Node.js!\n');
  res.end('Hello, Node.js!\n');
});

// Start listening
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
