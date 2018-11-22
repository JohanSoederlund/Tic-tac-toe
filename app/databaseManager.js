"use strict";

// Imports
import mongoose from 'mongoose';
import DatabaseModel from './databaseModel';

/* 
 * DatabaseManager class.
 */
export default class DatabaseManager {

	constructor() {
        
    }

    /**
	 * Connects to the database with the connectionstring given.
	 */
	connectDatabase() {
    }
    
    /**
	 * Disconnects from the database if there is an active connection.
	 */
    disconnectDatabase() {

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
