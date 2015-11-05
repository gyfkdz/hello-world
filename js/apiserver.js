var net = require('net')
var http = require('http')
var url = require('url')



var port = process.argv[2];




var server = http.createServer( function(request,response){
	
	var res = url.parse(request.url,true);
	
	
	
	console.log(res);
	
	if(res.pathname=="/api/parsetime"){
		

	//	console.log ( "printed herer");
	//	console.log (res.query["iso"]);
		
		var t = {"hour":1, "minute":5,"second":5}
		
		console.log( JSON.stringify(t) );
		
		
	}
	
} );

server.listen(port);