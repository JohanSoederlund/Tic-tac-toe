/**
 * Test suite for the databaseManager class.
 */

// Requires

import chai from 'chai';
import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import mongoose from 'mongoose';

var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

import DatabaseManager from '../app/databaseManager.js';
import DatabaseModel from '../app/databaseModel.js';
let sut = new DatabaseManager();
const correctConnectionString = 'mongodb://localhost:27017';
const incorrectConnectionString = 'mongodb://tic-tac-toe:27018';


export function run() {

    describe('connectDatabase', () => {

        beforeEach(function(){
        });
        afterEach(function(){
        });
        after((done) => {
            mongoose.connection.close();
            done();
		});

        describe('connectDatabase', () => {

            describe('called with correct db-string', () => {
                let connectionSpy;
                before((done) => {
                    connectionSpy = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(correctConnectionString);
                    done();
				});

				after((done) => {
                    connectionSpy.restore();
                    mongoose.connection.close();
                    done();
				});

                it('should emit ready-event', () => {
                    expect(connectionSpy).to.have.been.calledOnce;
                });

            });

            describe('called with incorrect db-string', () => {
                let connectionSpy2;
                
                before((done) => {
                    sut = new DatabaseManager();
                    connectionSpy2 = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(incorrectConnectionString);
                    done();
				});

                after((done) => {
                    connectionSpy2.restore();
                    mongoose.connection.close();
                    done();
				});
                
                it('should be called once', () => {
                    expect(connectionSpy2).to.have.been.calledOnce;
                });

                it('should emit connection-error-event', () => {
					expect(connectionSpy2.calledWith(undefined)).to.equal(false);
					expect(connectionSpy2.calledWith(null)).to.equal(false);
					expect(connectionSpy2.calledWith(sinon.match({}))).to.equal(true);
				});

            });

        });

        describe('disconnectDatabase', () => {

            describe('called with correct db-string', () => {
                
                let connectionSpy3;
                let connectionSpy4;
                
                before((done) => {
                    sut = new DatabaseManager();
                    connectionSpy3 = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(correctConnectionString);
                    connectionSpy4 = sinon.spy(sut, 'disconnectDatabase');
                    sut.disconnectDatabase();
                    done();
				});

                after((done) => {
                    connectionSpy3.restore();
                    connectionSpy4.restore();
                    mongoose.connection.close();
                    done();
				});

                it('should emit close-event', () => {
                    expect(connectionSpy3).to.have.been.calledOnce;
                    expect(connectionSpy4).to.have.been.calledOnce;
				});

				it('should disconnect the database', () => {
					expect(mongoose.connection.readyState).to.equal(0);
				});


            });
        });

        describe('saveGame', () => {
            let saveGameSpy;

            before(function(done) {
                mockgoose.helper.setDbVersion('3.2.1');
                mockgoose.prepareStorage().then(function() {
                    console.log("prep!!!!!!!!!!!");
                    mongoose.connect(correctConnectionString, function(err) {
                        console.log("connect!!!!!!!!!!");
                        done(err);
                    });
                });
            });

            after((done) => {
                saveGameSpy.restore();
                done();
            });

            describe('Incomplete instance of Game: wrong model', () => {
                
                it('Should not store new instance of Game in database, but throw error', () => {
                    saveGameSpy = sinon.spy(sut, 'saveGame');
                    expect(() => sut.saveGame(fakeGame())).to.throw(Error);
                    expect(saveGameSpy).to.have.been.calledOnce;
                });

            });
            
            describe('Incomplete instance of Game: null', () => {
                
                it('Should not store new instance of Game in database, but throw error', () => {
                    saveGameSpy.restore();
                    saveGameSpy = sinon.spy(sut, 'saveGame');
                    expect(() => sut.saveGame(null)).to.throw(Error);
                    expect(saveGameSpy).to.have.been.calledOnce;
                });

            });

            describe('Incomplete instance of Game: {}', () => {
                
                it('Should not store new instance of Game in database, but throw error', () => {
                    saveGameSpy.restore();
                    saveGameSpy = sinon.spy(sut, 'saveGame');
                    expect(() => sut.saveGame({})).to.throw(Error);
                    expect(saveGameSpy).to.have.been.calledOnce;
                });

            });

            describe('Complete instance of Game', () => {
                
                it('Should store new instance of Game in database', () => {
                    saveGameSpy.restore();
                    saveGameSpy = sinon.spy(sut, 'saveGame');
                    let gameMock = sinon.mock(DatabaseModel);
                    expect(() => sut.saveGame(game())).to.throw(Error);
                    expect(saveGameSpy).to.have.been.calledOnce;
                });

            });
           
        });
/*
        describe('findGame', () => {

            describe('', () => {
                
                it('Should', () => {
                });

            });
        });
*/
    });
    

}

/**
 * Helpers  
 */
function fakeGame() {
    let player1 = {_name: 'Michael', _gamePiece: 'X'};
    let player2 = {_name: 'Michelle', _gamePiece: 'O'};
    let gameBoard = { _gameBoard:
        [   [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]   ] };
    let roundNumber = 0;
    let winner = " ";

    var fakeGameSchema = new mongoose.Schema({
        player1: { type: Object, required: true } ,
        player2: { type: Object, required: true } ,
        gameBoard: { type: Object, required: true } ,
        winner:  { type: String, required: true } ,
        roundNumber:  { type: Number, required: true } ,
      });
    var fakeGame = mongoose.model('FakeGame', fakeGameSchema);
    return new fakeGame(player1, player2, gameBoard, winner, roundNumber);
}

function game() {
    let player1 = {_name: 'Michael', _gamePiece: 'X'};
    let player2 = {_name: 'Michelle', _gamePiece: 'O'};
    let gameBoard = { _gameBoard:
        [   [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]   ] };
    let roundNumber = 0;
    let winner = " ";

    var gameSchema = new mongoose.Schema({
        player1: { type: Object, required: true } ,
        player2: { type: Object, required: true } ,
        gameBoard: { type: Object, required: true } ,
        winner:  { type: String, required: true } ,
        roundNumber:  { type: Number, required: true } ,
      });
    var game = mongoose.model('FakeGame', fakeGameSchema);
    return new game(player1, player2, gameBoard, winner, roundNumber);
}
