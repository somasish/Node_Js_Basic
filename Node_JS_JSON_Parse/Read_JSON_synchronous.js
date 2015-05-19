var fs = require("fs");	//include the file system
console.log("program Starting");
var content = fs.readFileSync("config.json");		//No call back function "readFileSync"
console.log("File content ; " + content); 	// will wait till file load and then proceed
 var config = JSON.parse(content);	// Parse Json to normal object
 console.log("Content: " + config );
 console.log("Username: " + config.username );
console.log("Carry on Execution");	