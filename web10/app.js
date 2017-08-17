var express = require('express');
var ejs = require('ejs');
var app = express();
app.engine('html', ejs.renderFile);
app.listen(2000);
app.get('/product', showProduct);

function showProduct(req, res) {
	res.render('product.html');
}
