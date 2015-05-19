var fs = require("fs");	//include the file system
console.log("program Starting");
fs.readFile("sample.txt",function(error,data){		// Reads the file content and the call back function ... 
console.log("contents of the file : "+ data);

});
console.log("Carry on Execution");			// Execution continues in Node JS even if the file is not loaded.its a Asynchronus Version.. So Eficiency of programs are very high