const fs = require('fs');

const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

const port = 3000;

// RUN
server.listen(port);
