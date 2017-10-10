var should = require('should'),
    sinon = require('sinon');


describe('Game Controller Tests:', function(){
    describe('Post', function(){
        it('should not allow an empty title on post', function(){
            var Game = function(game){this.save= function(){}};

            var req ={
                body: {
                    author: 'Dave'
                }
            }

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            }

            var gameController = require('../Controllers/gameController')(Game);

            gameController.post(req,res);

            res.status.calledWith(400).should.equal(true, 'Bad Status' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);

        })
    })
})