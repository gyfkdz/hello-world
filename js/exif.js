
var fs = require('fs');


var ExifImage = require('exif').ExifImage;


function handle( path ){
	
		
	try {
		new ExifImage({ image : path }, function (error, exifData) {
			if (error)
				console.log('Error: '+error.message);
			else{
				
			   // console.log(exifData); // Do something with your data! 
				
				//wstream.write( "hello" ,"utf8");
				//wstream.write( JSON.stringify(exifData.gps,null ,2), "utf8" )
				
				//41°24'12.2"N 2°10'26.5"E
				
				//console.log(exifData.gps.GPSLatitude[0] ) 
				
				var lat= exifData.gps.GPSLatitude;
				var latref= exifData.gps.GPSLatitudeRef;
				
				var coord = "" +lat[0] + "Â°" + lat[1]+ "'" + lat[2]+latref;
				
	
				var lon= exifData.gps.GPSLongitude;
				var lonref= exifData.gps.GPSLongitudeRef;
				
				
				coord = coord +  " " +lon[0] + "Â°" + lon[1]+ "'" + lon[2]+lonref;
				
				console.log(coord);
					
				//wstream.write(coord, "utf8" )
				//wstream.write("\n", "utf8" )
				
				

			   var d = lat[0]
			   var m= lat[1]
			   var s = lat[2]
			   
					
			   var dd = (Math.abs(d) + (m / 60.0) + (s / 3600.0));
				if(latref=="S")
					dd=dd*-1;
				
				
			   var d = lon[0]
			   var m= lon[1]
			   var s = lon[2]
			   
				
			  var dd2 = (Math.abs(d) + (m / 60.0) + (s / 3600.0));
				if(lonref=="W")
					dd2=dd2*-1;
					
					
			//	['Bondi Beach', -33.890542, 151.274856, 4],	
					
				wstream.write(" [ 'test', " +dd + ","+ dd2 +  ",1],", "utf8" )
				//wstream.write(dd+ " " + dd2, "utf8" )
				wstream.write("\n", "utf8" )
					
					
					
				
				//
			}
		});
	} catch (error) {
		console.log('Error: ' + error.message);
	}

		
		
	
}

    



var path = "D:/bilder island";
	
var path = "D:/island small";
var path = "D:/island";

var list = fs.readdirSync(path);

//console.log(list);

for (var a in list){
	
	var name = list[a];
	
	console.log(name)
	
	if(name.indexOf("jpg") > -1) {
		
		console.log("handle")
		handle(path+"/"+name);
	}
	
	
}

var wstream = fs.createWriteStream('myOutput.txt', "utf8" );




handle("image/road.jpg");



