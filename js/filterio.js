

var fs = require('fs');

var pathlib = require('path');

var path = process.argv[2];

var ext = "."+process.argv[3];




fs.readdir(path, function(err,files){

//console.log(files);

for( var a of files ){
	
	
	
	var exttemp=pathlib.extname(a)
	
	var boole =  exttemp===ext ;
	if( boole )
		console.log(a)
	
//	console.log(exttemp, ext );
	
//	console.log ( );
	
}


});