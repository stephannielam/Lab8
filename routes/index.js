var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/templatelink', function(req, res, next) {
  res.render('tempexample.ejs');
});

router.get('/', function(req, res, next){
  res.render('index.ejs', {subtitle: 'Lab 8'});
});

module.exports = router;
