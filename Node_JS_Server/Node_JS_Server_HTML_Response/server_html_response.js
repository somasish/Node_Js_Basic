var http = require("http");
var fs = require("fs");
console.log("Prog Starting");
var config = JSON.parse(fs.readFileSync("config.json")); 		//Read port and host details from config file
var host = config.host;
var port = config.port;
var server = http.createServer(function(request, response){		//creating server
console.log("received request: " + request.url);
fs.readFile("./"+ request.url,function(error,data){			//file read from the same folder where the Js file is located. Call back for Error or any data in that host and port

if(error)													// if file not found 
{
response.writeHead(404,{"content-type":"text/plain"});
response.end("Pagecannot be found");
} else														// if file found print the data in HTML format
{
response.writeHead(200,{"content-type":"text/html"});
response.end(data);
}

});

});
server.listen(port, host, function(){				// listening in the port and host

	console.log("listening in Host:" + host +" and Port: " + port);
});

//File Watch on the Config file. If the port or host is changed
fs.watchFile("config.json",function(){

config = JSON.parse(fs.readFileSync("config.json")); 		//Read port and host details from config file
 host = config.host;										// Pass the new host and Post
 port = config.port;
server.close();												//Closing the old listener
server.listen(port, host, function(){				// listening in the newport and host

	console.log("Newly listening Host:" + host +" and Port: " + port);
});
});