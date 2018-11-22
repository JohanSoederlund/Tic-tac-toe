/**
 * Test suite for the databaseModel.
 */

// Requires

import chai from 'chai';
import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import DatabaseModel from '../app/databaseModel.js';
let sut = new DatabaseModel();


export function run() {
    beforeEach(function(){
    });
    afterEach(function(){
    });

    describe('gameModel', () => {

        it('should be valid if player is present', () => {
            
        });

        it('should be invalid if player is NOT present', () => {
            
        });

        it('should be valid if gameBoard is present', () => {
            
        });

        it('should be invalid if gameBoard is NOT present', () => {
            
        });

        it('should be valid if winner is present', () => {
            
        });

        it('should be invalid if winner is NOT present', () => {
            
        });

        it('should be valid if players are present', () => {
            
        });

        it('should be invalid if players are NOT present', () => {
            
        });

        it('should be valid if roundNumber is present', () => {
            
        });

        it('should be invalid if roundNumber is NOT present', () => {
            
        });

    });


}
