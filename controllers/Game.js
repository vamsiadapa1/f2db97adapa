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

// Handle Game create on POST. 
exports.Game_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Game(); 
     // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"GameName":"King Kong", "GameType":"Board", "GamePrice":"12.45"}
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

// for a specific Game. 
exports.Game_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Game.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle Game update form on PUT. 
exports.Game_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Game.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.GameName)  
               toUpdate.GameName = req.body.GameName; 
        if(req.body.GameType) toUpdate.cost = req.body.GameType; 
        if(req.body.GamePrice) toUpdate.size = req.body.GamePrice; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 