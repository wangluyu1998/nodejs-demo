#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
try{
  console.log(fs.statSync(dst));
}catch(e){
  console.error(e.message);
  process.exit(1);
}

