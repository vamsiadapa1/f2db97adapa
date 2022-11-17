var express = require('express');
const Game_controlers= require('../controllers/Game'); 
var router = express.Router();

/* GET Game page. */
  

router.get('/', Game_controlers.Game_view_all_Page );
/* GET detail Game page */
router.get('/detail', Game_controlers.Game_view_one_Page);
/* GET create Game page */
router.get('/create', Game_controlers.Game_create_Page);
/* GET create update page */
router.get('/update', Game_controlers.Game_update_Page);
/* GET delete Game page */
router.get('/delete', Game_controlers.Game_delete_Page);
module.exports = router;
