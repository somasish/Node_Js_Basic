var fs = require("fs");
console.log("Prog Started");
fs.writeFileSync("sample.txt","Rewriten file !! over the sample file ");
console.log("file writing finished");