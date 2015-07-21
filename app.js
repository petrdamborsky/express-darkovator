var express = require('express');
var app = express();
var routes = require('./routes/main.js');

// configure view engine
app.set('view engine', 'jade');
app.set('views', './views');

// configure public folder
app.use(express.static('public'));

// configure routes
app.use('/',routes);

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
});

app.use('/book/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
});

//error handling
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}