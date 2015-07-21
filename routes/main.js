var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Request at: ' + Date.now());
    next();
});

router.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})

router.get('/wishlist', function (req, res) {
    res.render('wishlist');
});

module.exports = router;