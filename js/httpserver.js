var net = require('net')
var http = require('http')

var fs = require('fs')

//var JSON = require('JSON')



var port = process.argv[2];
var file = process.argv[3];





var server = http.createServer( function(request,response){
	
	
	//console.log("request" , request);
	var readStream = fs.createReadStream(""+file);

	//readStream.on('open', function () {

    readStream.pipe(response);
   
	//});

	//response.write("hello");
	//response.end();
	//var str = JSON.stringify(request, null, 2);
	
} );

server.listen(port);