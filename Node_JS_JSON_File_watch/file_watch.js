var fs = require("fs");
console.log("Prog Started");
var content = fs.readFileSync("config.json");		//No call back function "readFileSync"
var config = JSON.parse(content);	// Parse Json to normal object
 console.log("initial file username Content: " + config.username );

fs.watchFile("config.json",function(current, previous){
console.log("config file read is changed");
content = fs.readFileSync("config.json");		//No call back function "readFileSync"
config = JSON.parse(content);	// Parse Json to normal object
 console.log("New file Username Content: " + config.username );
});		// call back function for current and previous. Means for any change in the file call back function is called

