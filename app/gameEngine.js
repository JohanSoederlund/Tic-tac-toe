


export default class GameEngine {

	constructor() {
        this.roundNumber = 0;
        this.winner = '';
        this.players = [];
        this._gameBoard = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
    }

    set gameBoard(gameBoard) {
        this._gameBoard = gameBoard;
    }

    get gameBoard() {
        return;
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
