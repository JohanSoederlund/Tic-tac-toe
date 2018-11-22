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
    describe('renderStartGame', () => {

        describe('Called once', () => {
            
            beforeEach(function(){
                this.consoleStub = sinon.stub(console, "log");
            });
            afterEach(function(){
                this.consoleStub.restore();
            });

            it('Should be called once', () => {
                let renderStartGameSpy = sinon.spy(sut, 'renderStartGame');
                sut.renderStartGame();
                expect(renderStartGameSpy).to.have.been.calledOnce;
            });

        });
    });

    describe('renderGameBoard', () => {

        describe('Called once', () => {
            
            beforeEach(function(){
                this.consoleStub = sinon.stub(console, "log");
            });
            afterEach(function(){
                this.consoleStub.restore();
            });

            it('Should be called once', () => {
                let renderStartGameSpy = sinon.spy(sut, 'renderGameBoard');
                sut.renderStartGame();
                expect(renderStartGameSpy).to.have.been.calledOnce;
            });

        });
    });

    describe('renderEndGame', () => {

        describe('Called once', () => {
            
            beforeEach(function(){
                this.consoleStub = sinon.stub(console, "log");
            });
            afterEach(function(){
                this.consoleStub.restore();
            });

            it('Should be called once', () => {
                let renderStartGameSpy = sinon.spy(sut, 'renderEndGame');
                sut.renderStartGame();
                expect(renderStartGameSpy).to.have.been.calledOnce;
            });

        });
    });
}
