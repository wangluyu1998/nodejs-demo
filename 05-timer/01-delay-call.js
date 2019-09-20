#!/usr/bin/node

//构造函数
function Bomb(){
  this.message = 'Bomb!!!';
}

Bomb.prototype.explode = function(){
  console.log(this.message);
};
//实例化定时炸弹对象
var bomb = new Bomb();

var timeId = setTimeout(bomb.explode.bind(bomb),2000);

clearTimeout(timeId);
