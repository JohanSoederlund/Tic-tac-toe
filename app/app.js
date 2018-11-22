"use strict";

import GameEngine from './gameEngine';
import ViewEngine from './viewEngine';
import Player from './player';

/* 
 * App controller class.
 */
export default class App {
	constructor() {
        this.gameEngine = new GameEngine();
        this.viewEngine = new ViewEngine();
    }
    
    instanciateNewGame() {

    }

    addPlayers() {

    }

    requestPlayerMove() {

    }

    checkGameStatus() {

    }

    showFinishedGame() {
        
    }
}
