

const gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
import Player from './player';

export default class GameEngine {

	constructor() {
       this.initGameBoard();
       this.roundNumber = 0;
       this.winner = '';
       this.players = [];
    }

    get gameBoard() {
        return;
    }

    initGameBoard() {

    }

    placeGamePiece(gamePiece, placement) {

    }

    calculateThreeInARow() {

    }

    startGame(player1, player2) {
        //check player1 is of type Player
        this.players[0] = player1;
        this.players[1] = player2;
    }

    getGame() {
        return { 
            players: this.players,
            roundNumber: this.roundNumber,
            winner: this.winner
        }
    }

    endGame() {

    }

}

module.exports
