#!/usr/bin/node

const MyReadable = require('./03-my-readable.js'),
      stdin = process.stdin;

var r = new MyReadable();

stdin.resume();
stdin.pipe(r);




