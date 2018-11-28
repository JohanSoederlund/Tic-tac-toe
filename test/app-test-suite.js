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
    
    describe('addPlayers', () => {

        it('should return true', () => {
            let gameEngineMock = sinon.mock(GameEngine);
            gameEngineMock.startGame = function(player1, player2){};
            
            sut.gameEngine = gameEngineMock;
            let addPlayersSpy = sinon.spy(sut, 'addPlayers');
            let actual = sut.addPlayers(['Johan', 'Klara']);

            expect(actual).to.be.true;
            expect(addPlayersSpy).to.have.been.calledOnce;
            expect(addPlayersSpy).to.have.been.calledOnceWith(['Johan', 'Klara']);
            sut = new App();
        });

        it('should return false', () => {
            let gameEngineMock = sinon.mock(GameEngine);
            gameEngineMock.startGame = function(player1, player2){throw new Error('Unit test error')};
            
            sut.gameEngine = gameEngineMock;
            let addPlayersSpy = sinon.spy(sut, 'addPlayers');
            let actual = sut.addPlayers(['Olle', 'Lisa']);

            expect(actual).to.be.false;
            expect(addPlayersSpy).to.have.been.calledOnce;
            expect(addPlayersSpy).to.have.been.calledOnceWith(['Olle', 'Lisa']);
            sut = new App();
        });

        it('should return false', () => {
            let gameEngineMock = sinon.mock(GameEngine);
            gameEngineMock.startGame = function(player1, player2){throw new Error('Unit test error')};
            
            sut.gameEngine = gameEngineMock;
            let addPlayersSpy = sinon.spy(sut, 'addPlayers');
            let actual = sut.addPlayers(null);

            expect(actual).to.be.false;
            expect(addPlayersSpy).to.have.been.calledOnce;
            expect(addPlayersSpy).to.have.been.calledOnceWith(null);
            sut = new App();
        });
    });

    describe('requestPlayerMove', () => {
            
        it('should be called once', () => {
            let viewEngineMock = sinon.mock(ViewEngine);
            viewEngineMock.renderRequestPlayerMove = function(player){};
            sut.viewEngine = viewEngineMock;
            let requestPlayerMoveSpy = sinon.spy(sut, 'requestPlayerMove');

            sut.requestPlayerMove('Johan');
            expect(requestPlayerMoveSpy).to.have.been.calledOnceWith('Johan');
            sut = new App();
        });

    });

    describe('checkGameOver', () => {

        it('should return true', () => {
            let gameEngineMock = sinon.mock(GameEngine);
            gameEngineMock.calculateThreeInARow = function(player){return true;};
            gameEngineMock.players = [];
            gameEngineMock.players[0] = 'Johan';
            sut.gameEngine = gameEngineMock;
            let checkGameOver = sinon.spy(sut, 'checkGameOver');

            let actual = sut.checkGameOver();
            expect(checkGameOver).to.have.been.calledOnce;
            expect(actual).to.be.true;
            sut = new App();    
        });

        it('should return false', () => {
            let gameEngineMock = sinon.mock(GameEngine);
            gameEngineMock.calculateThreeInARow = function(player){return false;};
            gameEngineMock.players = [];
            gameEngineMock.players[0] = 'Daniel';
            sut.gameEngine = gameEngineMock;
            let checkGameOver = sinon.spy(sut, 'checkGameOver');

            let actual = sut.checkGameOver();
            expect(checkGameOver).to.have.been.calledOnce;
            expect(actual).to.be.false;
            sut = new App();    
        });

    });
    
    describe('showFinishedGame', () => {

        it('should be called once', () => {
            let viewEngineMock = sinon.mock(ViewEngine);
            viewEngineMock.renderEndGame = function(game){};
            sut.viewEngine = viewEngineMock;
            
            let showFinishedGameSpy = sinon.spy(sut, 'showFinishedGame');

            sut.showFinishedGame();
            expect(showFinishedGameSpy).to.have.been.calledOnce;
            sut = new App();
        });

    });

}
