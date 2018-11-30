/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before } from 'mocha';
import * as sinon from 'sinon';

import GameEngine from './../app/gameEngine';
import Player from '../app/player.js';
let sut = new GameEngine();


export function run() {
    let player1 = sinon.mock(Player);
    let player2 = sinon.mock(Player);
    player1._name = 'Michael';
    player2._name = 'Michelle';
    player1._gamePiece = 'X';
    player2._gamePiece = 'O';
    

	describe('startGame', () => {

        describe('called with correct playernames', () => {
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
        });

        describe('called with incorrect playernames', () => {
            it('should throw Error', () => {
                player1._name = "";
                player2._name = "ANameThatIsMuchToLongName";
                expect(() => sut.startGame(player1, player2)).to.throw(Error);
                player1._name = 'Michael';
                player2._name = 'Michelle';
            });
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

        describe('get gameBoard after one incorrect gamePiece', () => {
            before((done) => {
                sut.startGame(player1, player2);
                sut.placeGamePiece(player1, [0, 0]);
                let player3 = sinon.mock(Player);
                player3._name = 'Michael';
                player3._gamePiece = 'Y';
                sut.placeGamePiece(player3, [0, 1]);
                done();
            });
            
            const expected = [
                ["X", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]
            ]
            
            it('should return matching game object', () => {
                expect(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                sut = new GameEngine();
            });
            
        });
    });

    describe('placeGamePiece', () => {

        describe('place gamePiece at correct unoccupied gameSquare', () => {
            
            before((done) => {
                sut.startGame(player1, player2);
                sut.placeGamePiece(player2, [2, 2]);     
                done();
            });
            
            it('should update gameBoard with X on position [0][0]', (done) => {
                const expected = [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", "O"]
                ]
                expect(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
        });

        describe('place gamePiece at incorrect gameSquare', () => {
            
            before((done) => {
                sut.placeGamePiece(player1, [2, 2]);     
                done();
            });
            
            it('should not update gameBoard', (done) => {
                const expected = [
                    [" ", " ", " "],
                    [" ", " ", " "],
                    [" ", " ", "O"]
                ]
                expect(JSON.stringify(sut.gameBoard)).to.equal(JSON.stringify(expected));
                done();
            });
        });

        describe('place gamePiece at out of range gameSquare', () => {
            
            it('should not update gameBoard, but throw error', (done) => {
                expect(() => sut.placeGamePiece(player1, [3, 0])).to.throw(RangeError);
                done();
            });
            sut = new GameEngine();
        });
        
    });
    
    describe('calculateThreeInARow', () => {

        describe('calculates if three in a row is accomplished', () => {
            it('should return false', () => {
                expect(sut.calculateThreeInARow(player1)).to.be.false;
            });
        });

        describe('calculates if three in a row is accomplished', () => {

            before((done) => {
                sut = new GameEngine();
                sut.startGame(player1, player2);
                sut.placeGamePiece(player1, [0, 0]);
                sut.placeGamePiece(player1, [0, 1]);  
                sut.placeGamePiece(player1, [0, 2]);
                done();
            });

            it('should return true', () => {
                expect(sut.calculateThreeInARow(player1)).to.be.true;
            });
        });

    });

    describe('endGame', () => {

        describe('end game in progress', () => {
            let expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: player1._name
            }
            it('should return current status for game then end it', () => {
                expect(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });

        describe('end game in progress', () => {
            before((done) => {
                sut = new GameEngine();
                sut.startGame(player1, player2);
                done();
            });

            let expected = {
                players: [player1, player2],
                roundNumber: 0,
                winner: ''
            }
            it('should return current status for game then end it', () => {
                expect(JSON.stringify(sut.endGame())).to.equal(JSON.stringify(expected));
            });
        });

    });

}

