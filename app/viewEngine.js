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
        this._consoleText = 
        "Tic-tac-toe\n\n" +
        "Aim for three in a row and win this simple game.\n" +
        "   {0}  |  {1}  |  {2}   \n" + 
        "   -------------------\n" + 
        "   {3}  |  {4}  |  {5}   \n" + 
        "   -------------------\n" + 
        "   {6}  |  {7}  |  {8}   "; 
        console.log(this._consoleText);
    }
    
    renderGameBoard(gameBoard) {
        this._consoleText = "   {"+gameBoard[0][0]+"}  |  {"+gameBoard[0][1]+"}  |  {"+gameBoard[0][2]+"}   \n" + 
        "   -------------------\n" + 
        "   {"+gameBoard[1][0]+"}  |  {"+gameBoard[1][1]+"}  |  {"+gameBoard[1][2]+"}   \n" + 
        "   -------------------\n" + 
        "   {"+gameBoard[2][0]+"}  |  {"+gameBoard[2][1]+"}  |  {"+gameBoard[2][2]+"}   "; 
        console.log(this._consoleText);
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
        return this._readline.question();
    }

}