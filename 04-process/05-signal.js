#!/usr/bin/node

process.on('SIGINT',()=>{
  console.log('you press ctrl+C or good bye');
  process.exit();
});

process.on('SIGTSTP',()=>{
  console.log('you press ctrl-z,stop running');
  process.exit();
});
