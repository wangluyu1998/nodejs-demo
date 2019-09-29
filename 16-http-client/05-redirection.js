#!/usr/bin/node

const addr = 'http://www.sian.com/',
      http = require('http');

function get(){
   http.get(addr,function(res) {
          
    //print start line
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
          
    //print response headers
    console.log(res.headers);
    console.log('');
          
    //print response body
    //res.pipe(process.stdout);
          
    if(res.statusCode <400 && res.statusCode >=300){
      get(res.headers.location);
    }else{
      res.pipe(process.stdout);
    }
  });
}
get(addr);

