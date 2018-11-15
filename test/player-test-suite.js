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
            //imports from mocha
            it('should return false', () => {
                expect(JSON.stringify(sut.isWinner)).to.be.false;
            });

        });

        describe('called after set to true', () => {
            
            sut.setWinner(true);

            it('should return true', () => {
                expect(JSON.stringify(sut.isWinner)).to.be.true;
            });

        });

        describe('called after set to null', () => {
            
            sut.setWinner(null);

            it('should return false', () => {
                expect(JSON.stringify(sut.isWinner)).to.be.false;
            });

        });

    });

}

