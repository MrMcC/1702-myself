var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //用模板引擎去渲染模板
  res.render('index', { title: 'Express' });
});

module.exports = router;
