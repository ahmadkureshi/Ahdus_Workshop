const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome to our home page');
    });

server.listen(5000);