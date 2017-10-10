var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var gameModel = new Schema({
        title: {
            type: String
        },
        Developer: {type: String},
        genre: {type: String},
        own: {type: Boolean, default:false}
    });

    module.exports= mongoose.model('Game', gameModel);