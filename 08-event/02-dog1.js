#!/usr/bin/node

//引入events模块、创建EventEmitter对象
const EventEmitter = require ('events').EventEmitter;

function Dog(name,energy){
  var _name = name;
  var _energy = energy;
  var that = this;

  EventEmitter.call(this);

  _name = name;
  _energy = energy;

  var timer = setInterval(()=>{
    if(_energy > 0){
      that.emit('bark');
      _energy--;
    }else{
      clearInterval(timer);
    }
  },1000);
}
this.getName = () => _name;
this.getEnergy = () => _energy;
Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
