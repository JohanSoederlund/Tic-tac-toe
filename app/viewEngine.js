"use strict";

var readline = require('readline-sync');

/* 
 * ViewEngine class.
 * V1.0 Console based.
 * V2.0 Web based.
 */
export default class ViewEngine {

	constructor() {
        this._consoleText = "";
        this._readline = readline;
    }
    
    renderStartGame() {
        console.log("Tic-tac-toe\n\n Aim for three in a row and win this simple game.\n\n player 1 input name:");
    }
    
    renderGameBoard(gameBoard) {
        console.log("   {0}  |  {1}  |  {2}   ");
        console.log("   -------------------");
        console.log("   {3}  |  {4}  |  {5}   ");
        console.log("   -------------------");
        console.log("   {6}  |  {7}  |  {8}   ");
    }

    renderEndGame(game) {
        this._consoleText = "players: {name: " + game.players[0].name + ", gamePiece: " + game.players[0].gamePiece + "}, {name: " + game.players[1].name + ", gamePiece: " + game.players[1].gamePiece + "}\n roundNumber: " + game.roundNumber + "\n winner: " + game.winner;
        console.log(this._consoleText);
    }

    renderBadPlayerMove() {
        this._consoleText = "Invalid move. Please try again!"; 
        console.log(this._consoleText);
    }

    renderRequestPlayerMove() {
        this._consoleText = "Insert 0-8 to place game piece at chosen position on the board:"; 
        console.log(this._consoleText);
        return this._readline.question();
    }

    renderRequestNameInput() {
        this._consoleText = "Insert nickname:"; 
        console.log(this._consoleText);
    }

}