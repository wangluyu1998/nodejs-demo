#!/usr/bin/node
const http = require('http'),
      log  = console.log;

http.createServer((req, res) => {
  log(`\n\n${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();

  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split(';');
    log(data);
  }

  res.statusCode = 200;
  res.setHeader('Set-cookie',['name=wangluyu;max-age=1000','mobie=12345673464']);
  res.end('hello world');
}).listen(8080);
