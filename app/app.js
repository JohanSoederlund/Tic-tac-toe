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
    
    /**
     * Initiates new game with two players added to game engine.
     */
    instanciateNewGame() {
        this.viewEngine.renderStartGame();
        let playerAddedSuccessfully = false;
        let index = 5;
        while(!playerAddedSuccessfully && index > 0) {
            playerAddedSuccessfully = this.addPlayers(this.viewEngine.renderRequestNameInput());
            index--;
        }
        return playerAddedSuccessfully;
    }

    /**
     * Add two players to game engine.
     */
    addPlayers(playerNames) {
        if (!Array.isArray(playerNames)) {
            return false;
        }
        try {
            this.gameEngine.startGame(new Player(playerNames[0], 'X'), new Player(playerNames[1], 'O'));
        } catch (error) {
            return false;
        }
        return true;
    }

    requestPlayerMove() {

    }

    checkGameStatus() {

    }

    showFinishedGame() {
        
    }
    
}
