var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next) {
	console.log('Logging...');
	next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
	{
		id: 1,
		first_name: 'John',
		last_name: 'Doe',
		email: 'johndoe@myspace.com'
	},
	{
		id: 2,
		first_name: 'James',
		last_name: 'Bond',
		email: 'jamesbondjamesbond@jamesbond.com'
	},
			{
		id: 1,
		first_name: 'Foofy',
		last_name: 'McDoofy',
		email: 'foofsmcdoofs@aol.com'
	},
]

app.get('/', function(req, res) {	
	res.render('index', {
		title: 'Customers',
		users: users
	});
});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});