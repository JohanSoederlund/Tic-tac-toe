/**
 * Test suite for the gamePiece class.
 */

// Requires

import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';

import GamePiece from './../app/gamePiece';
const sut = new GamePiece();


export function run() {
	describe('method', () => {

        before(() => {
			return new Promise((resolve) => {
				
			});
        });

        after(() => {
			return new Promise((resolve) => {
				
			});
        });
        

        describe('input', () => {
            const spy = sinon.spy();

            before(() => {
                return new Promise((resolve) => {

                });
            });

            after(() => {
                return new Promise((resolve) => {

                });
            });

            it('should', () => {
                expect(spy.called).to.equal(true);
            });
        });


    });

}


// Helpers
function testDisconnect() {
	//return sut.disconnect();
}
