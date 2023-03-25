var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This the is the users GET endpoint');
});

module.exports = router;
