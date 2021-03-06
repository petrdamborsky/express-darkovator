var express = require('express');
var app = express();
var routes = require('./routes/main.js');

// configure view engine
app.set('view engine', 'jade');
app.set('views', './views');

// configure public folder
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

// configure routes
app.use('/',routes);

app.get('/wishlist', function (req, res) {

  var data = {
    title: 'Wishlist',
    records:[
      'january',
      'february',
      'march',
      'april'
    ]
  };

  res.render('wishlist', data);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

//error handling
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}