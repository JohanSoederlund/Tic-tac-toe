"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(name, gamePiece) {
        _classCallCheck(this, Player);

        this._name = name;
        this._gamePice = gamePiece;
    }

    _createClass(Player, [{
        key: "setWinner",
        value: function setWinner(winner) {}
    }, {
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(name) {}
    }, {
        key: "gamePiece",
        get: function get() {
            return this._gamePice;
        },
        set: function set(gamePiece) {}
    }, {
        key: "isWinner",
        get: function get() {
            return;
        }
    }]);

    return Player;
}();

exports.default = Player;