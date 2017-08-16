var express = require('express');
var app = express();
var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.listen(2000);
app.get('/', showHome);
function showHome(req, res) {
	res.render('index.html');
}
