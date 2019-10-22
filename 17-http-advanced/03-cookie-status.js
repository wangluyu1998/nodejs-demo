#!/usr/bin/node

const http = require('http'),
      log  = console.log;

var total = 1;

http.createServer((req, res) => {
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  if(req.url === '/favicon.ico') return;
  log('I haved required %d times',total++);

  var count = 1;
  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split('=');
    var count = Number(data[1])+1;
    log(data);
  }

  res.statusCode = 200;
  res.setHeader('Set-cookie',`count=${count};max-age=2`);
  res.end(`You have visited ${count} times`);
}).listen(8080);
