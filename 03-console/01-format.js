#!/usr/bin/node

var wd = {
  'Name':'王顶',
  'QQ':'125935653',
  'Age':43
};

const log = console.log;

//三种占位符
log('name: %s',wd.Name);  //字符串类型
log('Age:%d',wd.Age);     //整数类型
log('WangDing Info:%j',wd);  //对象类型

//log('Name:%s\t Age:%d',wd.Name,wd.Age);

//输出wd.qq的信息，方式：
log('QQ:%s',wd.QQ);  //占位符输出
log('QQ:',wd.QQ);    //逗号间隔，多变量输出
log('QQ:'+wd.QQ);    //拼接字符串输出
log(`QQ:${wd.QQ}`);  //模板字符串输出

console.error('Error!something wrong');
