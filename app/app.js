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

    /**
     * Request a move from one Player.
     */
    requestPlayerMove(player) {
        this.viewEngine.renderRequestPlayerMove(player);
    }

    checkGameOver() {
        if (this.gameEngine.calculateThreeInARow(this.gameEngine.players[0])) {
            this.gameEngine.winner = this.gameEngine.players[0];
            return true;
        } else if(this.gameEngine.calculateThreeInARow(this.gameEngine.players[1])) {
            this.gameEngine.winner = this.gameEngine.players[1];
            return true;
        }
        return false;
    }

    showFinishedGame() {
        
    }

    roundLoop() {
        
    }
    
}
