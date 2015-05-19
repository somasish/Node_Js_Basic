var http = require("http");
console.log("Start program");
var host = "127.0.0.1";			//Host Details
var port = "1337";				//Port Details
var server = http.createServer(function(request, response ){
console.log("received request from: " + request.url);
response.writeHead(200,{"Content-type":"text/plain"});	
response.write("Hello world!!");
response.end("response end");

}); 		// Create server and call back function for request and response
server.listen(port, host, function(){

	console.log("listening on host :" + host + "and Port : " + port); 		// continuous listening as callback function doesnt have any parameter which represent when the call back should be called.

});		 //listening to the server and callback function 