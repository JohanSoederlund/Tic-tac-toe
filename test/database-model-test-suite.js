"use strict";

// Requires
import chai from 'chai';
import { expect } from 'chai';
import { it, describe } from 'mocha';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Game from '../app/databaseModel';

/**
 * Test-suite for database model. 
 */
export function run() {
    
    /**
     * Validates different inputs to mongoose model.
     */
    describe('gameModel', () => {
        let player1 = {};
        let player2 = {};
        player1._name = 'Michael';
        player2._name = 'Michelle';
        player1._gamePiece = 'X';
        player2._gamePiece = 'O';

        let gameEngine = {};
        gameEngine._gameBoard = { _gameBoard:
            [   [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]   ] };

        gameEngine._roundNumber = 0;
        gameEngine._winner = " ";
        gameEngine._players = [player1, player2];

        it('should be valid if players, gameBoard, winner, roundNumber are present', (done) => {
            const game = new Game({player1: gameEngine._players[0], player2: gameEngine._players[1], gameBoard: gameEngine._gameBoard, winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err).to.be.null;
                done();
            });
        });

        
        it('should be invalid if players are NOT present', (done) => {
            const game = new Game({gameBoard: gameEngine._gameBoard, winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.player1).to.exist;
                expect(err.errors.player2).to.exist;
                done();
            });
            
        });
       
        it('should be invalid if gameBoard is NOT present', (done) => {
            const game = new Game({player1: gameEngine._players[0], player2: gameEngine._players[1], winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.gameBoard).to.exist;
                done();
            });
        });

        it('should be invalid if winner is NOT present', (done) => {
            const game = new Game({player1: gameEngine._players[0], player2: gameEngine._players[1], gameBoard: gameEngine._gameBoard, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.winner).to.exist;
                done();
            });
        });

        it('should be invalid if roundNumber is NOT present', (done) => {
            const game = new Game({player1: gameEngine._players[0], player2: gameEngine._players[1], gameBoard: gameEngine._gameBoard, winner: gameEngine._winner});
            game.validate((err) => {
                expect(err.errors.roundNumber).to.exist;
                done();
            });
        });

    });


}
