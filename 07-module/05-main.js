#!/usr/bin/node

const obj = require('./02-export-all');

console.log(obj.pi);

console.log(obj.circle(10).area());

var c = new obj.Circle(20);

console.log(c.diameter());