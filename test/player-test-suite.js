/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';

import Player from '../app/player.js';
let sut = new Player('Liz', 'Q');

export function run() {
    
	describe('isWinner', () => {

        describe('called before set', () => {
            it('should return false', () => {
                expect(sut.isWinner).to.be.false;
            });
        });

        describe('called after set to true', () => {
            before((done) => {
                sut.setIsWinner(true);
                done();
            });

            after((done) => {
                sut.setIsWinner(false);
                done();
            });

            it('should return true', () => {
                expect(sut.isWinner).to.be.true;
            });
        });

        describe('called after set to null', () => {
            it('should throw TypeError winner must be of boolean type', () => {
                expect(() => sut.setIsWinner(null)).to.throw(TypeError);
                expect(sut.isWinner).to.be.false;
            });
        });

    });

    describe('name', () => {
        
        describe('called with falsy player', () => {

            it('should throw error', () => {
                expect(() => {
                    sut.name = "WayToLongNameKalle";
                }).to.throw(Error);
                expect(sut.name).to.equal('Liz');
            });
        });

        describe('called after set to null', () => {
            it('should throw TypeError name must be max 10 characters long', () => {
                expect(() => {
                    sut.name = null;
                }).to.throw(Error);
                expect(sut.name).to.equal('Liz');
            });
        });

        describe('called after set to Lizz', () => {
            it('should not throw TypeError name must be max 10 characters long', () => {
                expect(() => {
                    sut.name = "Lizz";
                }).to.not.throw(Error);
                expect(sut.name).to.equal('Lizz');
            });
        });
        
    });

    describe('gamePiece', () => {
        
        describe('called with falsy player', () => {

            it('should throw error', () => {
                expect(() => {
                    sut.gamePiece = "XO";
                }).to.throw(Error);
                expect(sut.gamePiece).to.equal('Q');
            });
        });

        describe('called after set to null', () => {
            it('should throw Error', () => {
                expect(() => {
                    sut.gamePiece = null;
                }).to.throw(Error);
                expect(sut.gamePiece).to.equal('Q');
            });
        });

        describe('called after set to X', () => {
            it('Should not throw TypeError gamePiece must be one character long', () => {
                expect(() => {
                    sut.gamePiece = "X";
                }).to.not.throw(Error);
                expect(sut.gamePiece).to.equal('X');
            });
        });
    });

}

