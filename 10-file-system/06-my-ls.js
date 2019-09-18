#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2] || __dirname;//默认值 当前目录

console.log(fs.readdirSync(dir));

fs.statSync(dir + content).isFile()d;//查看是文件还是目录
