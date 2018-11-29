/**
 * Test suite for the viewEngine class.
 */

// Requires
import chai from 'chai';
import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import ViewEngine from '../app/viewEngine.js';
let sut = new ViewEngine();

export function run() {
    beforeEach(function(){
        this.consoleStub = sinon.stub(console, "log");
    });
    afterEach(function(){
        this.consoleStub.restore();
    });
/*
    describe('renderStartGame', () => {
        it('Should be called once', () => {
            let renderStartGameSpy = sinon.spy(sut, 'renderStartGame');
            sut.renderStartGame();
            expect(renderStartGameSpy).to.have.been.calledOnce;
        });
    });

    describe('renderGameBoard', () => {
        it('Should be called once', () => {
            let renderGameBoardSpy = sinon.spy(sut, 'renderGameBoard');
            sut.renderGameBoard();
            expect(renderGameBoardSpy).to.have.been.calledOnce;
        });
    });
*/
    describe('renderEndGame', () => {

        it('Should be called once with valid game', () => {
            let renderEndGameSpy = sinon.spy(sut, 'renderEndGame');
            let game = { 
                players: [{name: "Daniel", gamePiece: "X"}, {name: "Johan", gamePiece: "O"}],
                roundNumber: 7,
                winner: "Daniel"
            };
            sut.renderEndGame(game);
            let actual = sut._consoleText;
            expect(actual).to.be.equal("players: {name: Daniel, gamePiece: X}, {name: Johan, gamePiece: O}\n roundNumber: 7\n winner: Daniel");
            expect(renderEndGameSpy).to.have.been.calledOnceWith({ 
                players: [{name: "Daniel", gamePiece: "X"}, {name: "Johan", gamePiece: "O"}],
                roundNumber: 7,
                winner: "Daniel"
            });
        });
    });
  /*  
    describe('renderBadPlayerMove', () => {
        it('Should be called once and set consoletext', () => {
            let renderBadPlayerMoveSpy = sinon.spy(sut, 'renderBadPlayerMove');
            sut.renderBadPlayerMove();
            let actual = sut._consoleText;
            expect(actual).to.be.equal("Invalid move. Please try again!");
            expect(renderBadPlayerMoveSpy).to.have.been.calledOnce;
        });
    });

    describe('renderRequestPlayerMove', () => {
        it('Should be called once and set consoletext', () => {
            sut._readline.question = function(){ return 0; };

            let renderRequestPlayerMoveSpy = sinon.spy(sut, 'renderRequestPlayerMove');
            let returnValue = sut.renderRequestPlayerMove();
            let actual = sut._consoleText;
            expect(actual).to.be.equal("Insert 0-8 to place game piece at chosen position on the board:");
            expect(renderRequestPlayerMoveSpy).to.have.been.calledOnce;
            expect(returnValue).to.equal(0);
        });
    });
   
    describe('renderRequestNameInput', () => {
        it('Should be called once and set consoletext', () => {
            sut._readline.question = function(){ return 8; };

            let renderRequestNameInputSpy = sinon.spy(sut, 'renderRequestNameInput');
            let returnValue = sut.renderRequestNameInput();
            let actual = sut._consoleText;
            expect(actual).to.be.equal("Insert nickname:");
            expect(renderRequestNameInputSpy).to.have.been.calledOnce;
            expect(returnValue).to.equal(8);
        });
    });
    */
}
