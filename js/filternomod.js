var mymodule = require('./filtermodule.js')


var path = process.argv[2];

var ext = process.argv[3];


mymodule(path, ext, function(err,data){

	//console.log(data);
		
	for(var a of data){
		
		console.log(a);
		
	}

}	);