var net = require('net')


var moment = require('moment');


var path = process.argv[2];


var server = net.createServer( function(socket){
	
	
  //console.log('client connected');
  socket.on('end', function() {
   // console.log('client disconnected');
  });
  
  var now = moment().format("YYYY-MM-DD HH:mm");

  
  
  socket.write(now+'\r\n');
  
 socket.end();
 // socket.pipe(socket);
  
	
} );


server.listen(path, function() { //'listening' listener
 // console.log('server bound');
});
