var ejs = require('ejs');
var app = require('express')();
app.engine('html', ejs.renderFile);
app.listen(2000);
app.get('/product', showProduct);
app.get('/staff', showStaff);

var coffee = ['Americano', 'Latte', 'Mocha', 'Espresso'];
var user = 'Mark Zuckerberg';
var staff = ['Sheryl Sandberg', 'David Wehner', 'Mike Schroepfer', 'Chris Cox']

function showProduct(req, res) {
	res.render('product.html', {user: user, product: coffee});
}
function showStaff(req, res) {
	res.render('staff.html', {staff: staff});
}
