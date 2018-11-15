/**
 * Test suite for the gameEngine class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
//var sinon = require('sinon');
//import sinon from './node_modules/sinon/pkg/sinon-esm.js';

import GameEngine from './../app/gameEngine';
import Player from '../app/player.js';
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
            console.log(actual);
            console.log(expected);
            it('should return matching game object', () => {
                expect(JSON.stringify(actual)).to.equal(JSON.stringify(expected));
            });
        });


    });

}

