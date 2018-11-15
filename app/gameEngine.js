

const gameBoard = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

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

    startGame(playerName1, playerName2) {
        this.players[0] = playerName1;
        this.players[1] = playerName2;
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
