var http = require('http');




var path = process.argv[2];

http.get(path, function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding("utf8");
  
  var nr = 0;
  res.on("data",function(data){ nr++;  console.log(data) });
  
  
  
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});