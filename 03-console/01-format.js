#!/usr/bin/node

//定义对象
var wd = {
  'Name':'王顶',
  'QQ':'125935653',
  'Age':43
};

const log = console.log;

//三种占位符输出三种变量类型：
log('name: %s',wd.Name);  //字符串%s
log('Age: %d',wd.Age);     //整数%d
log('WangDing Info: %j',wd);  //对象%j

log('Name:%s\tAge:%d',wd.Name,wd.Age);

//输出wd.qq的信息，方式：
log('QQ:%s',wd.QQ);  //字符串占位符输出
log('QQ:',wd.QQ);    //逗号间隔，多变量输出
log('QQ:'+wd.QQ);    //拼接字符串输出
log(`QQ:${wd.QQ}`);  //模板字符串输出

console.error('Error!something wrong');
