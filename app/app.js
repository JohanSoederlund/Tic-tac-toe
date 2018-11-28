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
        this.viewEngine.renderStartGame();
        let playerAddedSuccessfully = false;
        let index = 5;
        while(!playerAddedSuccessfully && index > 0) {
            if (index > 0) {
                playerAddedSuccessfully = this.addPlayers(this.viewEngine.renderRequestNameInput());
            }
            index--;
        }
        return playerAddedSuccessfully;
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
