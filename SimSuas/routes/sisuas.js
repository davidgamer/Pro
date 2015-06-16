var express = require('express');
var router = express.Router();

/* GET Sisuas page. */
router.get('/', function(req, res, next) {
  res.render('sisuas');
  next();
});

module.exports = router;