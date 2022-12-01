var express = require('express');
const Game_controlers= require('../controllers/Game'); 
//redirect to login
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
var router = express.Router();

/* GET Game page. */
  

router.get('/', Game_controlers.Game_view_all_Page );
/* GET detail Game page */
router.get('/detail', Game_controlers.Game_view_one_Page);
/* GET create Game page */
router.get('/create',secured, Game_controlers.Game_create_Page);
/* GET create update page */
router.get('/update',secured, Game_controlers.Game_update_Page);
/* GET delete Game page */
router.get('/delete',secured, Game_controlers.Game_delete_Page);
module.exports = router;
