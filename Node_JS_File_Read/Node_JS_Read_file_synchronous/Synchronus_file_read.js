var fs = require("fs");	//include the file system
console.log("program Starting");
var content = fs.readFileSync("sample.txt");		//No call back function "readFileSync"
console.log("File content ; " + content); 	// will wait till file load and then proceed
console.log("Carry on Execution");	