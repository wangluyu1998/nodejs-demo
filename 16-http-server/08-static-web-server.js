#!/usr/bin/node

const http = require('http'),
      log = console.log,
      fs = require('fs');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  var file = __dirname + req.url;

  fs.reeadFile(file,(erre,data)=>{
    if(err){
      log(err.message);
      res.statusCode = 404;
      res.end(err.message);
    }else{
      re.end(data);
    }
  });
}).listen(3000);
