var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cv-static', { title: 'Curilulum Vitae (CV) Muhammad Dzakiy' });
});

module.exports = router;
