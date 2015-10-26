var net = require('net')
var http = require('http')

var map = require('through2-map')


var port = process.argv[2];





var server = http.createServer( function(request,response){
	
	
	
	//request.pipe( response);
	
	//console.log("request" , request);
	
		
	  request.on('data', function (chunk) {
		
		//console.log()
		
		//response.write(chunk);
		
		
		
	//	response.end();
	  });
	
	
	var trun = map(function (chunk) {
		return chunk.toString().toUpperCase();
	})
	
	
	
	request.pipe(trun).pipe(response);
	
	//response.write("hello");
	
	
	
	
	//var readStream = fs.createReadStream(""+file);

	//readStream.on('open', function () {

    //  readStream.pipe(response);
   
	//});

	//response.write("hello");
	//response.end();
	//var str = JSON.stringify(request, null, 2);
	
} );

server.listen(port);