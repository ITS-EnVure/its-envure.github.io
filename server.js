var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen('5151');
console.log('working on 5151');