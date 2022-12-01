const mongoose = require("mongoose") 
const GameSchema = mongoose.Schema({  
GameName: {
    type: String,
    min: 1,
    max: 100
},
GameType: {
    type: String,
    min: 1,
    max: 100
},
GamePrice: {
    type: Number,
    min: 1,
    max: 10000000
}
}) 
 
module.exports = mongoose.model("Game", 
GameSchema)