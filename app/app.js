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

    /**
     * Check if the game is won by either one of the Players.
     */
    checkGameOver() {
        for(let i = 0; i < 2; i++) {
            let player = this.gameEngine.players[i];
            if (this.gameEngine.calculateThreeInARow(player)) {
                this.gameEngine.winner = player;
                return true;
            }
        }
        return false;
    }

    showFinishedGame() {
        
    }

    roundLoop() {
        
    }
    
}
