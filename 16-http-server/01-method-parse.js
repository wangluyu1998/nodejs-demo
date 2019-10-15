#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req, res) => {
  log('reqest method:',req.method);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;
    case 'PUT':
      update(req,res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'DELETE':
      remove(req,res);
    default:
      err(req,res);
  }

  function select(req,res){
    res.end(req.method);
  }
  function update(req,res){
    res.end(req.method);
  }
  function insert(req,res){
    res.end(req.method);
  }
  function delete(req,res){
    res.end(req.method);
  }
  function err(res){
    res.end('something wrong！');
  }

  res.end('OK!');

}).listen(8080);
