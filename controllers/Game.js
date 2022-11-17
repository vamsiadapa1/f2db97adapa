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

// Handle cereal delete on DELETE.

exports.Game_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Game.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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

// Handle a show one view with id specified by query
exports.Game_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Game.findById(req.query.id)
        res.render('Gamedetail',
            { title: 'Game Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a Game.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Game_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Gamecreate', { title: 'Game Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a Game.
// query provides the id
exports.Game_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Game.findById(req.query.id)
        res.render('Gameupdate', { title: 'Game Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.Game_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Game.findById(req.query.id)
        res.render('Gamedelete', {
            title: 'Game Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
