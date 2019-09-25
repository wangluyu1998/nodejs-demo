#!/usr/bin/node
const cp = require('child_process');

console.log('I am father process. PID:', process.pid);

var child = cp.spawn('./02-child.js',[],{'detached':true,'stdio':['ignore',1,2]});

global.setTimeout(function(){
  console.log('dad bye!');
  process.exit();
},5000);
