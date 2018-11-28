/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';

import GameEngine from './../app/gameEngine';
import Player from '../app/player.js';
import ViewEngine from '../app/viewEngine.js';
import App from '../app/app.js';
let sut = new App();

export function run() {

	describe('instanciateNewGame', () => {

        it('should return true', () => {
            let ViewEngineMock = sinon.mock(ViewEngine);
            ViewEngineMock.renderStartGame = function(){};
            ViewEngineMock.renderRequestNameInput = function(){};
            sut.viewEngine = ViewEngineMock;
            sut.addPlayers = function(playerNames){ return true; };
            let instanciateNewGameSpy = sinon.spy(sut, 'instanciateNewGame');
            let actual = sut.instanciateNewGame();

            expect(actual).to.be.true;
            expect(instanciateNewGameSpy).to.have.been.calledOnce;
            sut = new App();
        });

        it('should return false', () => {
            let ViewEngineMock = sinon.mock(ViewEngine);
            ViewEngineMock.renderStartGame = function(){};
            ViewEngineMock.renderRequestNameInput = function(){};
            sut.viewEngine = ViewEngineMock;
            sut.addPlayers = function(playerNames){ return false; };
            let instanciateNewGameSpy = sinon.spy(sut, 'instanciateNewGame');
            let actual = sut.instanciateNewGame();

            expect(actual).to.be.false;
            expect(instanciateNewGameSpy).to.have.been.calledOnce;
            sut = new App();
        });

    });

    /*
    describe('addPlayers', () => {

        let player1 = sinon.mock(Player);
        let player2 = sinon.mock(Player);
        sut.addPlayers(player1, player2);

        describe('', () => {
            
            it('should', () => {
                //expect addPlayers to be called once with player1 and player2 
                //expect call to requestPlayerMove
                expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
            });
        });


    });

    describe('requestPlayerMove', () => {

        describe('', () => {
            
            it('should', () => {
                //expect requestPlayerMove to be called once
                //expect w8 for input (mock) then call checkGameStatus
            });
        });


    });

    describe('checkGameOver', () => {

        describe('', () => {
            
            it('should', () => {
                //expect checkGameStatus to be called once
                //if gameover expect call to showFinishedGame
                //else expect call to requestPlayerMove
            });
        });


    });

    describe('roundLoop', () => {

        describe('', () => {
            
            it('should', () => {

            });
        });


    });

    describe('showFinishedGame', () => {

        describe('', () => {
            
            it('should', () => {
                //expect showFinishedGame to be called once
                //expect call to view class (mock)
            });
        });


    });
    */

}

