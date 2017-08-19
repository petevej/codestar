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
		if (data.length == 1) {
			var card = Math.random();
			valid[card] = data[0];
			res.set('Set-Cookie', 'card=' + card );
			res.redirect('/profile');
		} else {
			res.redirect('/login');
		}
	})
}
var valid = [ ];
var cookie = require('cookie-parser')();
app.get('/profile', cookie, showProfile);
function showProfile(req, res) {
	if (req.cookies && req.cookies.card && valid[req.cookies.card]) {
		res.render('profile.html', { user: valid[req.cookies.card] });
	} else {
		res.redirect('/login');
	}
}
app.get('/logout', cookie, showLogout);
function showLogout(req, res) {
	if (req.cookies && req.cookies.card) {
		delete valid[req.cookies.card];
	}
	res.send('You have been logged out.');
}
