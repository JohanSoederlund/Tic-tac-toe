


export default class GameEngine {

	constructor() {
        this.roundNumber = 0;
        this.winner = "";
        this.players = [];
        //call setter instead
        this._gameBoard = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
    }

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

    placeGamePiece(player, placement) {
        if (typeof(player) !== "object" || placement.isArray === false) {
            throw new TypeError("player and placement must be of valid type");
        } else if(0 > placement[0] > 2 || 0 > placement[1] > 2 ) {
            throw new RangeError("Placement must be in range [0, 0] to [2, 2]");
        }
        if (this._gameBoard[placement[0]][placement[1]] === " ") {
            this._gameBoard[placement[0]][placement[1]] = player._gamePiece;
            if (player._gamePiece === "O") {
                this.roundNumber++;
            }
        } 
    }

    calculateThreeInARow() {
        this._gameBoard.forEach(row => {
            if (row[0] !== " " && row[0] === row[1] === row[2]) {
                return true;
            }
        });
        if (this._gameBoard[0][0] !== " ") {
            if (this._gameBoard[0][0] === this._gameBoard[1][0] === this._gameBoard[2][0]) return true;
            if (this._gameBoard[0][0] === this._gameBoard[1][1] === this._gameBoard[2][2]) return true;
        }
        if (this._gameBoard[0][1] !== " ") {
            if (this._gameBoard[0][1] === this._gameBoard[1][1] === this._gameBoard[2][1]) return true;
        }
        if (this._gameBoard[0][2] !== " ") {
            if (this._gameBoard[0][2] === this._gameBoard[1][2] === this._gameBoard[2][2]) return true;
            if (this._gameBoard[0][2] === this._gameBoard[1][1] === this._gameBoard[2][0]) return true;
        }
        return false;
    }

    startGame(player1, player2) {
        if (typeof(player1) !== "object" || typeof(player2) !== "object") {
            throw new TypeError("players must be of valid type");
        } 
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
