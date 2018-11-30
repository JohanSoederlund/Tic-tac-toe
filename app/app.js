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
            let p1 = this.viewEngine.renderRequestNameInput();
            let p2 = this.viewEngine.renderRequestNameInput();
            playerAddedSuccessfully = this.addPlayers([p1, p2]);
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
        let playerMove = Number(this.viewEngine.renderRequestPlayerMove(player));
        let pm = [];
        switch (playerMove) {
            case 0:
            case 1:
            case 2:
                pm = [0, playerMove-3];
                break;
            case 3:
            case 4:
            case 5:
            pm = [1, playerMove-3];
                break;
            case 6:
            case 7:
            case 8:
            pm = [2, playerMove-6];
                break;
            default:
                break;
        }
        return pm;
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

    /**
     * Calls viewengine to render finished game.
     */
    showFinishedGame() {
        this.viewEngine.renderEndGame(this.gameEngine.endGame());
    }

    /**
     * Iterates until one player won by three in a row.
     */
    roundLoop() {
        let index = 0;
        while(!this.checkGameOver()) {
            try {
                this.viewEngine.renderGameBoard(this.gameEngine._gameBoard);
                let playerMove = this.requestPlayerMove(this.gameEngine.players[index]);
                this.gameEngine.placeGamePiece(this.gameEngine.players[index], playerMove);
                if (index === 0) {
                    index = 1;
                } else {
                    index = 0;
                }
            } catch (error) {
                this.viewEngine.renderBadPlayerMove();
            }
        }
        this.showFinishedGame();
    }
    
}
