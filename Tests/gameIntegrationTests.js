var should = require('should'),
    request =  require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Game = mongoose.model('Game'),
    agent = request.agent(app);


describe('Game Crud Test', function(){
    it('Should allow a book to be posted and return a read and _id',function(done){
        var gamePost = {title:'new Game', author:'Dave', genre:'Fantasy'};
        
        agent.post('/api/games')
        .send(gamePost)
        .expect(200)
        .end(function(err,results){
            results.body.own.should.equal(false);
            results.body.should.have.property('_id');
            done();

        });
    });
    afterEach(function(done){
        Game.remove().exec();
        done();
    });
});