// worker.js
var zmq = require('zeromq')
  , sock = zmq.socket('pull');

sock.connect('tcp://youhost:3000');
console.log('Worker connected to port 3000');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});
