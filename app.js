var express = require ('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://urvaius:Buffy11$@arne-5-mongo1-shard-00-00-ujozx.mongodb.net:27017,arne-5-mongo1-shard-00-01-ujozx.mongodb.net:27017,arne-5-mongo1-shard-00-02-ujozx.mongodb.net:27017/bookAPI?ssl=true&replicaSet=arne-5-mongo1-shard-0&authSource=admin')

var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 3000;
 
var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req,res){
        var query = {};
        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Book.find(query,function(err, books){
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });
    });

bookRouter.route('/Books/:bookId')
.get(function(req,res){
    
    Book.findById(req.params.bookId,function(err, book){
        if(err)
            res.status(500).send(err);
        else
            res.json(book);
    });
});
app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('welcome to my api');
});

app.listen(port, function(){
    console.log('running my app on  port: ' + port);
});