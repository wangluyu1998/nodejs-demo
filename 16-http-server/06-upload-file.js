#!/usr/bin/node

const http = require('http'),
      fs = require('fs'),
      qs = require('querystring'),
      log = require('util').debuglog('UPLOAD-FILE');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');
})
