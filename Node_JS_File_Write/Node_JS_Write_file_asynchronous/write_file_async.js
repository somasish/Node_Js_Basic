var fs = require("fs");
console.log("Prog Started");
fs.writeFile("sample.txt","Rewriten file async!! over the sample file ", function(error){		//Async file written and call back function when finished

console.log("file written");

});
console.log("prog finished");