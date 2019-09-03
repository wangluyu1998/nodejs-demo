#!/usr/bin/node

const http = require('http')

http.createServer((req,res)={
  res.end('hello word!');
}).listen(8080);

