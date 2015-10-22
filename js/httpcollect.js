var http = require('http');

var bl = require('bl');



var path = process.argv[2];

http.get(path, function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding("utf8");
  
 // var nr = 0;
 // res.on("data",function(data){ nr++;  console.log(data) });
	res.pipe( bl(function(err,data){

  
	console.log(data.toString().length)
	console.log(data.toString())

	} ))
  
  
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});