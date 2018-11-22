/**
 * Test suite for the databaseManager class.
 */

// Requires

import chai from 'chai';
import { expect } from 'chai';
import { it, describe, before, after } from 'mocha';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import mongoose from 'mongoose';

import DatabaseManager from '../app/databaseManager.js';
let sut = new DatabaseManager();
const correctConnectionString = 'mongodb://tic-tac-toe:27017';
const incorrectConnectionString = 'mongodb://tic-tac-toe:27018';


export function run() {

    describe('connectDatabase', () => {

        beforeEach(function(){
        });
        afterEach(function(){
        });
        after(() => {
            mongoose.connection.close();
		});

        describe('connectDatabase', () => {

            describe('called with correct db-string', () => {
                const spy = sinon.spy();

                before(() => {
                    sut.connect(correctConnectionString);
				});

				after(() => {
                    mongoose.connection.close();
				});

                it('should emit ready-event', () => {
                    sut.connectDatabase(correctConnectionString);
                    expect(spy.called).to.equal(true);
                });

            });

            describe('called with incorrect db-string', () => {
                const spy = sinon.spy();
                
                before(() => {
                    sut.connectDatabase(incorrectConnectionString);
				});

                after(() => {
                    mongoose.connection.close();
				});
                
                it('should emit connection-error-event', () => {
                    expect(spy.called).to.equal(true);
                });

                it('should pass the error on when emitting \'error\'-event', () => {
					expect(spy.calledWith(undefined)).to.equal(false);
					expect(spy.calledWith(null)).to.equal(false);
					expect(spy.calledWith(sinon.match({}))).to.equal(true);
				});

            });
        });
/*
        describe('disconnectDatabase', () => {

            describe('', () => {
                
                it('Should', () => {
                });

            });
        });

        describe('saveGame', () => {

            describe('', () => {
                
                it('Should', () => {
                });

            });
        });

        describe('findGame', () => {

            describe('', () => {
                
                it('Should', () => {
                });

            });
        });
*/
    });
    

}
