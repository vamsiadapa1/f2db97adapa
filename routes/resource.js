var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Game_controller = require('../controllers/Game'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Game.  
router.post('/Game', Game_controller.Game_create_post); 
 
// DELETE request to delete Game. 
router.delete('/Game/:id', Game_controller.Game_delete); 
 
// PUT request to update Game. 
router.put('/Game/:id', Game_controller.Game_update_put); 
 
// GET request for one Game. 
router.get('/Game/:id', Game_controller.Game_detail); 
 
// GET request for list of all Game items. 
router.get('/Game', Game_controller.Game_list); 
 
module.exports = router;