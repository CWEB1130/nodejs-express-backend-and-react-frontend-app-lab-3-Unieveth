var express = require('express');
var router = express.Router();
var offers = require('../offers.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.send(res.json(offers))
});

module.exports = router;
