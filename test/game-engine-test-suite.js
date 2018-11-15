/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';

import GameEngine from './../app/gameEngine';
import Player from '../app/player.js';
let sut = new GameEngine();


export function run() {
	describe('startGame', () => {

        /*
        before(() => {
			return new Promise((resolve) => {
				
			});
        });
        */
        after(() => {
			return new Promise((resolve) => {
                sut = new GameEngine();
                resolve();
			});
        });
        

        describe('called with correct playernames', () => {
            let player1 = sinon.mock(Player);
            let player2 = sinon.mock(Player);
            sut.startGame(player1, player2);

            let actual = sut.getGame();
            let expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: ''
            }
            it('should return matching game object', () => {
                expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
            });

            player1.restore();
            player2.restore();
            sut = new GameEngine();
        });


    });

    describe('get gameBoard', () => {

        describe('get empty gameBoard', () => {
            const expected = [
                [" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]
            ]
            it('should return matching game object', () => {
                expect(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
            });
        });

    });

    describe('placeGamePiece', () => {

        describe('place gamePiece at correct unoccupied gameSquare', () => {
            
            before((done) => {
                let player1 = sinon.mock(Player);
                player1._gamePiece = 'X';
                let placement = [0, 0];
                sut.placeGamePiece(player1, [0, 0]);     
                done();
            });
            
            it('should update gameBoard with X on position [0][0]', (done) => {
                const expected = [
                    ["X", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", " "]
                ]
                expect(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
        });

    });

    
    describe('calculateThreeInARow', () => {

        describe('calculates if three in a row is accomplished', () => {
            it('should return false', () => {
                expect(sut.calculateThreeInARow()).to.be.false;
            });
        });

    });

    describe('endGame', () => {

        describe('end game in progress', () => {
            let expected = {
                players: [],
                roundNumber: 0,
                winner: ''
            }
            it('should return current status for game then end it', () => {
                expect(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });

    });

}

