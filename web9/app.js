var http = require('http');
var app = http.createServer(show);
app.listen(2000);

function show(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<i>Welcome to iCoffee</i>');
	res.end();
}

