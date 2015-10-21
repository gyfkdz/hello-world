var fs = require('fs');

var path = process.argv[2];



fs.readFile(path,'utf8', function (err, data) {
  if (err) throw err;
//  console.log(data.split("\n"));
  
  console.log ( data.split("\n").length-1) ;
  
  
});