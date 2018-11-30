"use strict";

/* 
 * GameEngine class.
 */
export default class GameEngine {
    constructor() {
        this.roundNumber = 0;
        this.winner = "";
        this.players = [];
        this._gameBoard = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
    }

    /**
     * Updates gameBoard
     * @param {Array} gameBoard 
     */
    set gameBoard(gameBoard) {
        if (gameBoard.isArray && gameBoard[0].isArray) {
            this._gameBoard = gameBoard;
        } else {
            throw new TypeError("gameBoard must be of valid type");
        }
    }

    get gameBoard() {
        return this._gameBoard;
    }

    /**
     * Calculates if a move is correct and then updates the gameBoard
     * @param {Array} gameBoard 
     */
    placeGamePiece(player, placement) {
        if (typeof(player) !== "object" || placement.isArray === false) {
            throw new TypeError("player and placement must be of valid type");
        } else if(0 > placement[0] || placement[0] > 2 || 0 > placement[1] || placement[1] > 2 ) {
            throw new RangeError("Placement must be in range [0, 0] to [2, 2]");
        }
        if (JSON.stringify(this.players[0]) === JSON.stringify(player)) {
            if (this._gameBoard[placement[0]][placement[1]] === " ") {
                this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
            } 
        } else if (JSON.stringify(this.players[1]) === JSON.stringify(player)) {
            if (this._gameBoard[placement[0]][placement[1]] === " ") {
                this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
                this.roundNumber++;
            } 
        }
        
    }

    /**
     * Calculates if a player has three in a row
     * @param {Object} player 
     */
    calculateThreeInARow(player) {
        if (this._gameBoard[0][0] === player._gamePiece) {
            if (this._gameBoard[0][0] === this._gameBoard[1][0] && this._gameBoard[1][0] === this._gameBoard[2][0]) return true;
            if (this._gameBoard[0][0] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][2]) return true;
        }
        if (this._gameBoard[0][1] === player._gamePiece) {
            if (this._gameBoard[0][1] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][1]) return true;
        }
        if (this._gameBoard[0][2] === player._gamePiece) {
            if (this._gameBoard[0][2] === this._gameBoard[1][2] && this._gameBoard[1][2] === this._gameBoard[2][2]) return true;
            if (this._gameBoard[0][2] === this._gameBoard[1][1] && this._gameBoard[1][1] === this._gameBoard[2][0]) return true;
        }
        let win = false;
        this._gameBoard.forEach(row => {
            if (row[0] === player._gamePiece && row[0] === row[1] && row[1] === row[2]) win = true;
        });
        return win;
    }

    /**
     * Instatiates a new game with two players
     * @param {Object} player1 
     * @param {Object} player2
     */
    startGame(player1, player2) {
        if (typeof(player1) !== "object" || typeof(player2) !== "object") {
            throw new TypeError("players must be of valid type");
        }
        if (typeof(player1._name) !== "string" || 10 < player1._name.length || player1._name.length < 1 || typeof(player2._name) !== "string" || 10 < player2._name.length || player2._name.length < 1){
            throw new Error("name must be between one and 10 characters long");
        } else {
            this.players[0] = player1;
            this.players[1] = player2;
        }
    }

    getGame() {
        return { 
            players: this.players,
            roundNumber: this.roundNumber,
            winner: this.winner
        }
    }

    /**
     * Ends a game in progress
     */
    endGame() {
        if (this.calculateThreeInARow(this.players[0])) this.winner = this.players[0]._name;
        if (this.calculateThreeInARow(this.players[1])) this.winner = this.players[1]._name;
        let game = { 
            players: this.players,
            roundNumber: this.roundNumber,
            winner: this.winner
        }
        this.players = [];
        this.roundNumber = 0;
        this.winner = "";
        return game;
    }
}
