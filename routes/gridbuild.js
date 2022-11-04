var express = require('express');
var router = express.Router();

/* GET gridbuild page. */
router.get('/', function(req, res, next) {
    let query = req.query
    rwc = query.rows
    clc = query.cols
console.log(`rows ${query.rows}`)
console.log(`cols ${query.cols}`)
  res.render('gridbuild', { title: 'Grid Build', query: query });
});

module.exports = router;
