/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';

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

}

