#!/usr/bin/node

  function area(radius){
    return Math.PI * radius *radius;
  }
  function circu(radius){
    return 2*Math.PI*radius;
  }
  function diameter(radius){
    return 2*radius;
  }

console.dir(module);//打印module信息
module.exports = area;//导出area对象
