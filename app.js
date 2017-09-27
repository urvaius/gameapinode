var express = require ('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://urvaius:Buffy11$@arne-5-mongo1-shard-00-00-ujozx.mongodb.net:27017,arne-5-mongo1-shard-00-01-ujozx.mongodb.net:27017,arne-5-mongo1-shard-00-02-ujozx.mongodb.net:27017/bookAPI?ssl=true&replicaSet=arne-5-mongo1-shard-0&authSource=admin');

var Book = require('./models/bookModel');

var app = express();
var port = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);
//app.use('/api/authors', authorRouter);
app.get('/', function(req, res){
    res.send('welcome to my api');
});

app.listen(port, function(){
    console.log('running my app on  port: ' + port);
});