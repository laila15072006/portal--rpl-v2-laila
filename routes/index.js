var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var title = "express"
  res.render('materi_rpl_1', { title: title });
});
router.get('/posttest', function(req, res, next) {
  var title = "express"
  res.render('post_test', { title: title });
});

router.get('/credipoint', function(req, res, next) {
  var title = "express"
  res.render('poin_post_test', { title: title });
});
module.exports = router;
