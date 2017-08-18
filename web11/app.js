var mysql = require('mysql');
var info = {
	host: '35.187.236.49',
	user: 'elon',
	password: 'musk',
	database: 'imarket'
}

var pool = mysql.createPool(info);
var express = require('express');
var ejs = require('ejs');
var app = express();
app.engine('html', ejs.renderFile);
app.listen(2000);
var body = require('body-parser').urlencoded({extended:false});
app.post('/login', body, checkPassword);
app.get('/login', showLogin);

function showLogin(req, res) {
	res.render('login.html');
}
function checkPassword(req, res) {
	var sql = 'select * from member where email = ? ' +
			' and password = sha2(?, 512)'
	pool.query(sql, [req.body.email, req.body.password], (e, data) => {
				console.log(data[0]);
			});
}
