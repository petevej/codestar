var express = require('express');
var app = express();
app.listen(2000);

app.get('/final', showFinal);
function showFinal(req, res) {
	var price = req.query.price;
	if ( price > 100 ) {
		var finalprice = price * 0.95;
	} else {
		finalprice = price;
	}
res.send('The Final Price is: ' + finalprice);
}

/*
app.get('/total', showTotal);
function showTotal(req, res) {
	res.send('Total is: ' + req.query.price * 1.07);
}
*/

/*
app.get('/', show);
app.get('/test', test);
app.get('/data', showData);

function test(req, res) {
	res.send( [1, 2, 5] );
}

function showData(req, res) {
	res.send( {title: 'Biology', price: 150} );
}

function show(req, res) {
	res.send('Welcome to Express.js');
}
*/

/*
var http = require('http');
var app = http.createServer(show);
app.listen(2000);

function show(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<i>Welcome to iCoffee</i>');
	res.end();
}
*/

