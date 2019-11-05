#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req, res) => {
  log('HTTP request url:',req.url);

  //var addr = url.parse(req.url);
  var addr ='https://wangding:1234@www.baidu.com:8000/a/b/c?age=20&color=green#/def/efg';
  
  parseURL(addr);

  res.end('ok!');

}).listen(8080);

function parseURL(strURL){
  var path = url.parse(strURL);

  log('href:',path.href);
  log('protocol:',path.protocol);
  log('auth:',path.auth);
  log('pathname:',path.pathname);
  log('port',path.port);
  log('host:',path.host);
  log('search:',path.search);
  log('hash',path.hash); 
  log('query',path.query);
  log('url parse:', path.pathname.split('/'));
  log('qs parse:', qs.parse(path.query));
  
}
