var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

    var gameModel = new Schema({
        title: {
            type: String
        },
        Developer: {type: String},
        Publisher: {type: String},
        want: {type: Boolean, default:false},
        genre: {type: String},
        about: {type: String},
        Platform: {type: String},
        rating: {type: int},
        
        own: {type: Boolean, default:false}
    });

    module.exports= mongoose.model('Game', gameModel);