#!/usr/bin/node

var count = 0;

//定义构造函数
function Num(){}

Num.prototype.add = () => count++;
Num.prototype.getCount = () => count;
module.exports = Num;
