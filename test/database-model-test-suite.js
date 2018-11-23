/**
 * Test suite for the databaseModel.
 */

// Requires

import chai from 'chai';
import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Game from '../app/databaseModel';
import Player from '../app/player';
import GameEngine from '../app/gameEngine';

export function run() {
    
    describe('gameModel', () => {
        let player1 = sinon.mock(Player);
        let player2 = sinon.mock(Player);
        player1._name = 'Michael';
        player2._name = 'Michelle';
        player1._gamePiece = 'X';
        player2._gamePiece = 'O';

        let gameEngine = sinon.mock(GameEngine);
        gameEngine._gameBoard =  
            [   [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]   ];

        gameEngine._roundNumber = 0;
        gameEngine._winner = "";
        gameEngine._players = [player1, player2];

        it('should be valid if players, gameBoard, winner, roundNumber are present', () => {
            const game = new Game({players: gameEngine._players, gameBoard: gameEngine._gameBoard, winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err).to.be.null;
            });
        });

        it('should be invalid if players are NOT present', () => {
            const game = new Game({gameBoard: gameEngine._gameBoard, winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.players).to.exist;
            });
            
        });

        it('should be invalid if gameBoard is NOT present', () => {
            const game = new Game({players: gameEngine._players, winner: gameEngine._winner, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.gameBoard).to.exist;
            });
        });

        it('should be invalid if winner is NOT present', () => {
            const game = new Game({players: gameEngine._players, gameBoard: gameEngine._gameBoard, roundNumber: gameEngine._roundNumber});
            game.validate((err) => {
                expect(err.errors.winner).to.exist;
            });
        });

        it('should be invalid if roundNumber is NOT present', () => {
            const game = new Game({players: gameEngine._players, gameBoard: gameEngine._gameBoard, winner: gameEngine._winner});
            game.validate((err) => {
                expect(err.errors.roundNumber).to.exist;
            });
        });

    });


}
