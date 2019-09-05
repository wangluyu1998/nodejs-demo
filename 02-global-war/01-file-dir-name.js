#!/usr/bin/node


console.log('dir name:',__dirname);
console.log('file name:',__filename);

//opterate data file
var file=__dirname+'/data/db.xml';
console.log('file name',file);

//windows data file
file = __dirname + '\\data\\db.xml';

const path = require('path');
fileName = path.join(__dirname,'views','login.html');
console.log('fileName:',fileName);
