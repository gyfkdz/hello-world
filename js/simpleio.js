var fs = require('fs');


var path = process.argv[2];

var buf = fs.readFileSync(path);

var arr = buf.toString().split("\n");

/*
console.log(path);
console.log(buf);
console.log(buf.toString());
console.log("arr",arr.length);

*/

console.log(arr.length-1);
