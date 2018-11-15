


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

    set name(name) {
        this._name = name;
    }

    set gamePiece(gamePiece) {
        this._gamePice = gamePiece;
    }

    setIsWinner(winner) {
        if (typeof(winner) === "boolean"){
            this._isWinner = winner;
        } else {
            //throw new Error();
            throw new TypeError("winner must be of boolean type");
        }
            
    }

}
