var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME' });
});

/* GET Map. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map' });
});

/* GET 2 page. */
router.get('/2', function(req, res, next) {
  res.render('page', { title: '2' });
});

/* GET 3 page. */
router.get('/3', function(req, res, next) {
  res.render('page', { title: '3' });
});

module.exports = router;
