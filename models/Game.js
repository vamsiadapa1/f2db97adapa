const mongoose = require("mongoose") 
const GameSchema = mongoose.Schema({ 
 GameName: String, 
 GameType: String, 
 GamePrice: Number 
}) 
 
module.exports = mongoose.model("Game", 
GameSchema)