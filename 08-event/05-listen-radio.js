#!/usr/bin/node

const Radio = require('./05-radio');

const station = {
  freq: '106.7',
  name: 'music radio'
};

//实例化radio对象
var radio = new Radio(station);

radio.on('play',(station) => {
  console.log('"%s" FM %s opened!',station.name,station.freq);
  console.log('lalala~~~');
});

radio.on('stop',(station) =>{
  console.log('"%s" FM %s closed!',station.name,station.freq);
});

