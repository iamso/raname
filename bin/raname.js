#! /usr/bin/env node

var colors = require('colors');
var cp = require('copy-paste');
var raname = require('../index');

var args = process.argv[2];
var output;

if (args === 'raw') {
  output = JSON.stringify(raname());
}
else if (args === 'camel') {
  output = raname.camel();
}
else {
  output = raname.dash();
}
cp.copy(output);

console.log(colors.yellow(output));
