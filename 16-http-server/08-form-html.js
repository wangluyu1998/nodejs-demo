#!usr/bin/node

const http = require('http'),
        fs = require('fs'),
        qs = require('querystring'),
        log = console.log;

var items = [];

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method ==='GET' && req.url === '/a'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(getHTML());
  }else{
    res.end('Error!');
  }

}).listen(8080);

function getHTML(){
  html = fs.readFileSync('a.html').toString('utf8');
  return html;
}
  
