var Game = require('../models/Game'); 
 
// List of all Games 
exports.Game_list = async function(req, res) { 
    try{ 
        theGame = await Game.find(); 
        res.send(theGame); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.Game_view_all_Page = async function(req, res) { 
    try{ 
        theGame = await Game.find(); 
        res.render('Game', { title: 'Game Search Results', results: theGame }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.Game_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Game(); 
     
    document.GameName = req.body.GameName;    
    document.GameType = req.body.GameType;
    document.GamePrice = req.body.GamePrice;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Game. 
exports.Game_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id); 
}; 
 

// Handle Game delete form on DELETE. 
exports.Game_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game delete DELETE ' + req.params.id); 
}; 
 
// Handle Game update form on PUT. 
exports.Game_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Game update PUT' + req.params.id); 
}; 