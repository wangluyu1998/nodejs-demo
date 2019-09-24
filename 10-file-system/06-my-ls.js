#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2] || __dirname;//默认值 当前目录
try{
  console.log(fs.readdirSync(dir));
}catch(e){
  console.error(e.message);
  process.exit(1);
}


//fs.statSync(dir + content).isFile();//查看是文件还是目录
