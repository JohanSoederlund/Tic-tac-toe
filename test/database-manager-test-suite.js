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
const correctConnectionString = 'mongodb://localhost:27017';
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
                let connectionSpy;
                before(() => {
                    connectionSpy = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(correctConnectionString);
				});

				after(() => {
                    connectionSpy.restore();
                    mongoose.connection.close();
				});

                it('should emit ready-event', () => {
                    expect(connectionSpy).to.have.been.calledOnce;
                });

            });

            describe('called with incorrect db-string', () => {
                let connectionSpy2;
                
                before(() => {
                    sut = new DatabaseManager();
                    connectionSpy2 = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(incorrectConnectionString);
				});

                after(() => {
                    connectionSpy2.restore();
                    mongoose.connection.close();
				});
                
                it('should be called once', () => {
                    expect(connectionSpy2).to.have.been.calledOnce;
                });

                it('should emit connection-error-event', () => {
					expect(connectionSpy2.calledWith(undefined)).to.equal(false);
					expect(connectionSpy2.calledWith(null)).to.equal(false);
					expect(connectionSpy2.calledWith(sinon.match({}))).to.equal(true);
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
