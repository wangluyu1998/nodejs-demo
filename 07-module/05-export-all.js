#!/usr/bin/node

module.exports = {
  pi: require('./02-exports-var'),
  circle: require('./02-export-function.js'),
  Circle:require('./02-export-object')
};

console.dir(module);
