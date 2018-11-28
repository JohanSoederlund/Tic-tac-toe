"use strict";

/* 
 * Player class.
 */
export default class Player {
	constructor(name, gamePiece) {
        this._name = name;
        this._gamePice = gamePiece;
        this._isWinner = false;
    }
    
    get name() {
        return this._name;
    }

    get gamePiece() {
        return this._gamePice;
    }

    get isWinner() {
        return this._isWinner;
    }

    /**
     * Player nickname
     * @param {String} name 
     */
    set name(name) {
        if (typeof(name) === "string" && 10 >= name.length && name.length >= 1){
            this._name = name;
        } else {
            throw new TypeError("name must be between one and 10 characters long");
        }
    }

    /**
     * The players GamePiece represented as one char
     * @param {Character} gamePiece 
     */
    set gamePiece(gamePiece) {
        
        if (typeof(gamePiece) === "string" && gamePiece.length === 1){
            this._gamePice = gamePiece;
        } else {
            throw new TypeError("gamePiece must be one character long");
        }
    }

    /**
     * sets this player to winner if won the game
     * @param {boolean} winner true if this player won
     */
    set isWinner(winner) {
        if (typeof(winner) === "boolean"){
            this._isWinner = winner;
        } else {
            throw new TypeError("winner must be of boolean type");
        }
    }

}
