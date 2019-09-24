#!/usr/bin/node

console.log('start...');

//定时执行
const timeId = setInterval(loop,500);
timeId.unref();

function loop(){
  console.log('I will loop forever!');
}

//取消定时器
setTimeout(() => {
  console.log('Game over!!');
},5000);
