#!/usr/bin/node 

const http = require('http'),
      fs = require('fs');

var buf = {}; 

http.createServer((req,res)=>{
  //如果请求的是图标，不做任何响应
  if(req.url === '/favicon.ico') return;

  var fileName = __dirname + req.url;
  console.log(fileName);
  if(!fs.existsSync(fileName)) return;

  if(!buf[fileName]){
    console.log('read file');
    buf[fileName] = fs.readSync(fileName);
  }
  res.end(buf[fileName]);
}).listen(8080);

console.log(process.pid);
