"use strict";

/* 
 * ViewEngine class.
 * V1.0 Console based.
 * V2.0 Web based.
 */
export default class ViewEngine {

	constructor() {
        this._consoleText = "";
    }
    
    renderStartGame() {
        console.log("Tic-tac-toe\n\n Aim for three in a row and win this simple game.\n\n player 1 input name:");
    }
    
    renderGameBoard() {
        console.log("   {0}  |  {1}  |  {2}   ");
        console.log("   -------------------");
        console.log("   {3}  |  {4}  |  {5}   ");
        console.log("   -------------------");
        console.log("   {6}  |  {7}  |  {8}   ");
    }

    renderEndGame(game) {
        console.log(" players: this.players\n roundNumber: this.roundNumber\n winner: this.winner");
    }

    renderBadPlayerMove() {
        this._consoleText = "Invalid move. Please try again!"; 
        console.log(this._consoleText);
    }

    renderRequestPlayerMove() {
        this._consoleText = "Insert 0-8 to place game piece at chosen position on the board:"; 
        console.log("Insert 0-8 to place game piece at chosen position on the board:");
    }

    renderRequestNameInput() {
        this._consoleText = "Insert nickname:"; 
        console.log("Insert nickname:");
    }

}