/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';

import GameEngine from './../app/gameEngine';
const sut = new GameEngine();


export function run() {
	describe('start game', () => {

        /*
        before(() => {
			return new Promise((resolve) => {
				
			});
        });

        after(() => {
			return new Promise((resolve) => {
				
			});
        });
        */

        describe('called with correct', () => {
            
            sut.startGame('Johan', 'lisa');
            let actual = sut.getGame();
            let expected = {
                players: ['Johan', 'lisa'],
                roundNumber: 0,
                winner: ''
            }
            it('should emit game start', () => {
                expect(actual).to.equal(expected);
            });
        });


    });

}

