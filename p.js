var zmq = require('zeromq')
  , sock = zmq.socket('push');

sock.bindSync('tcp://0.0.0.0:3000');
console.log('Producer bound to port 3000');

setInterval(function(){
  console.log('sending work');
  sock.send('some work');
}, 500);
