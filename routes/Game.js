var express = require('express');
const Game_controlers= require('../controllers/Game'); 
var router = express.Router();

/* GET Game page. */
  

router.get('/', Game_controlers.Game_view_all_Page );

module.exports = router;
