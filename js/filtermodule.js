


module.exports = function(patharg, extarg, callback ){
	
var fs = require('fs');

var pathlib = require('path');

	extarg="."+extarg;
			
		var t = fs.readdir(patharg, function(err,files){

			if(err)
				return callback(err);
		
			var temp =[];
			for( var a of files ){
				
				var exttemp=pathlib.extname(a)
				
				var boole =  exttemp===extarg ;
				if( boole )
					temp.push(a);
			
			}
			
			callback(null, temp);
		
		});
	
//	console.log("hello");
	
//	callback(null, ["a","b","c"])
}