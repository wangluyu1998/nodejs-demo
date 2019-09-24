#!/usr/bin/node

//输出当前目录名、文件名
console.log('dir name:',__dirname);
console.log('file name:',__filename);

//opterate data file
var file=__dirname+'/data/db.xml';
console.log('file name',file);

//windows data file
file = __dirname + '\\data\\db.xml';

//path.join() 
const path = require('path');
const fileName = path.join(__dirname,'views','login.html');
console.log('file name:',fileName);
