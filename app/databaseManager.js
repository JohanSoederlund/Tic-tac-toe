"use strict";

// Imports
import mongoose from 'mongoose';
import DatabaseModel from './databaseModel';

/* 
 * DatabaseManager class.
 */
export default class DatabaseManager {

	constructor() {
        //this.connectionString = 'mongodb://tic-tac-toe:27017';
        this.connectionString = 'mongodb://localhost:27017';
    }

    /**
	 * Connects to the database with the connectionstring given.
	 */
	connectDatabase() {
        //mongoose.connect(this.connectionString, { useNewUrlParser: true })
        mongoose.connect(this.connectionString)
            .catch((err) => {
                console.log('connection-error', err);
            });
    }
    
    /**
	 * Disconnects from the database if there is an active connection.
	 */
    disconnectDatabase() {
        mongoose.connection.close()
            .catch((err) => {
                console.log('disconnect-error', err);
            });
    }

    /**
	 * Adds the given game to the databse.
	 * if game exist that one will be updated with the new information, and no new document will be created.
	 */
    saveGame() {

    }

    /**
	 * Finds a game in the databse.
	 */
    findGame() {

    }

}
