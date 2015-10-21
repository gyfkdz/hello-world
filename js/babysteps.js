//console.log(process.argv);
//console.log(process.argv.length);

if( process.argv.length>2 ){
	var sum=0;
	for(var i=2; i<process.argv.length;i++){
		sum = sum + Number(process.argv[i]);
		
		//console.log("nuber ", Number(process.argv[i]));
		//console.log("sum",sum);
	}
	
	console.log(sum);

}
else {
	console.log(0);
	
}