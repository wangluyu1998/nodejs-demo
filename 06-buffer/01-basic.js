#!/usr/bin/node

const log = console.log;

//实例化一个缓冲区大小为256字节的buffer对象
var buf1 = new Buffer(256);

buf1[0] = 0x11;

log('buf1 length:',buf1.length);
log('buf1',buf1);

var buf2 = buf1.slice(250,256);
log('buf2:',buf2);

//初始化buf1的每个字节
for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}

log('buf1:',buf1);


var arr = ['a',0xba,0xdf,0x00,255,10];

//用数组初始化buf3
var buf3 = new Buffer(arr);
log('buf3:',buf3);
log('buf3 length:',buf3.length);

//用字符串初始化buf4
var buf4 = new Buffer('Hello World!');
log('buf4:',buf4);
log('buf4.length:',buf4.length);


log('buf2:',buf2.toJSON());
log('buf2:',JSON.stringify(buf2));

buf4.copy(buf3,0,0,buf3.length);
log('buf4:',buf4);
log('buf3:',buf3);

var str = '你好，wangluyu';
var buf5 = new Buffer(str);
log('buf5 length:',buf5.length);
log('string length:',str.length);
