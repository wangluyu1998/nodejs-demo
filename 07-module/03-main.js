#!/usr/bin/node

const log = console.log,
      pi = Math.PI;
require('./03-global.js');

log('pi:',pi);
log('area:',circle(20).area());
log('diameter:',objCircle.diameter(20));
