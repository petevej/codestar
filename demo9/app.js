var express = require('express');
var app = express();
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.listen(2000);
app.get('/', showHome);
app.get('/start', showStart);
app.get('/result', showResult);
app.get('/search', showArea);

function showHome(req, res) {
	res.render('index.html');
}
function showStart(req, res) {
	res.render('start.html');
}
function showResult(req, res) {
	var t = req.query.price * 1.07;
	res.render('result.html', {result: t, user: 'Mark Z'});
}

var data= [
	{area:'Bangrak', code:'10500'},
	{area:'Dusit', code:'10400'},
	{area:'Bangplad', code:'10700'}
]
function showArea(req, res) {
	var a = req.query.area;
        var result = 'Not Found';
	for( var i of data ) {
		if ( a == i.area ) {
			result = i.code;
		}
	}
	// res.send('The zip code is: ' + result);
	res.render('code.html', {code: result});
}

