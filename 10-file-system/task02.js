#!/usr/bin/node

var fs = require('fs'),
    src = process.argv[2],
    dirname = process.argv[3],
    log = console.log;

try{
  switch(src){
    case 'list':
      var fileList = [];
      //读取当前目录获得所有文件及文件夹
      const allfiles = fs.readdirSync(__dirname);
      
      //获取所有文件
      var files = allfiles.filter(item => {
        return fs.statSync(item).isFile();
      });
      
      //遍历文件数组获取各文件信息
      files.forEach(function(item){
        var size = fs.statSync(item).size + "";
        var obj = {
          "fileName":item,
          "fileSize":size
        }

      //填充数组
      fileList.push(obj);
      });

      log(fileList);
      break;
    case 'mkdir':
      //判断文件夹名称
      if(typeof(dirname) === 'undefined'){
        console.error('没有指定要创建的文件夹名称');
        process.exit(1);
      }
      //新建文件夹
      fs.mkdirSync(dirname);
      break;
    default:
      log('命令行参数错误！');
  }
}catch(e){
  console.error(e.message);
  process.exit(1);
}
