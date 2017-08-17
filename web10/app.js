var express = require('express');
var ejs = require('ejs');
var app = express();
app.engine('html', ejs.renderFile);
app.listen(2000);
app.get('/product', showProduct);
app.get('/staff', showStaff);

function showProduct(req, res) {
	res.render('product.html', {product: coffee});
}

var coffee = ['Americano', 'Latte', 'Mocha', 'Espresso'];

function showStaff(req, res) {
	res.render('staff.html', {staff:
		['Mark Zuckerberg', 'Bill Gates',
		'Elon Musk', 'Sheryl Sandberg']
	})
}
