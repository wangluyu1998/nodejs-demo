#!/usr/bin/node

const http = require('http'),
      qs = require('querystring'),
      mysql = require('mysql'),
      log = console.log,
      con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'111',
        database:'test'
      });
con.connect();

var items = '';

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log('');

  if(req.method === 'GET' && req.url === '/'){
    //200 OK
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(getHTML());         
  }
  else if(req.method === 'POST' && req.url === '/'){
    //submit data
    var it = '';
    req.on('data',(data)=>{
      it += data;          
    });

    req.on('end',()=>{
      if(typeof it !== 'undefined'){
        items.push(qs.parse(it).item);              
      }
      res.end(getHTML());        
    });
  }
  else{
    //error
    res.end('error!');
  }
}).listen(8080);

function getHTML(){ 
  select();
  return '<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>TODO List</h1><ul>'+items.map(function(item) {return '<li>' + item + '</li>';}).join('\n')+'</ul><form method="POST" action="/"><input type="text" name="item"><input type="submit" value="submit"></form></body></html>';
}

function select(){
//查
con.query('select * from todo',(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  items = result;
});
}
function insert(item){
//增
con.query('insert into todo(item) values(?,?,?)',[item],(err,result)=>{
  if(err){
    console.error(err.message);
    process.exit(1);
  }
  return 0; 
});
}

