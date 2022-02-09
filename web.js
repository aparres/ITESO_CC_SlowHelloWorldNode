const http = require('http');
const request = require('request');

const url = "http://169.254.169.254/latest/meta-data/local-ipv4"
var localIP = ""
request(url, function (error, response, body) {
	localIP = body
	console.log('body:', body); // Print the HTML for the Google homepage.
});

const server = http.createServer((req,res) => {
	console.log('url:',req.url)
	console.log('going slow')
	for(var i=0; i<100000000; i++) {}
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Wolrd from '+localIP+'\n');
});

server.listen(80, (error)=>{
	console.log("server start")
});


