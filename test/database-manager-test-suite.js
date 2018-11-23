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

        describe('disconnectDatabase', () => {

            describe('called with correct db-string', () => {
                
                let connectionSpy3;
                let connectionSpy4;
                
                before(() => {
                    sut = new DatabaseManager();
                    connectionSpy3 = sinon.spy(sut, 'connectDatabase');
                    sut.connectDatabase(correctConnectionString);
                    connectionSpy4 = sinon.spy(sut, 'disconnectDatabase');
                    sut.disconnectDatabase();
				});

                after(() => {
                    connectionSpy3.restore();
                    connectionSpy4.restore();
                    mongoose.connection.close();
				});

                it('should emit close-event', () => {
                    expect(connectionSpy3).to.have.been.calledOnce;
                    expect(connectionSpy4).to.have.been.calledOnce;
				});

				it('should disconnect the database', () => {
					expect(mongoose.connection.readyState).to.equal(0);
				});


            });
        });

/*
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
