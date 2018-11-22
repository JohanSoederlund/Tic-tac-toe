"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameEngine = require('./gameEngine');

var _gameEngine2 = _interopRequireDefault(_gameEngine);

var _viewEngine = require('./viewEngine');

var _viewEngine2 = _interopRequireDefault(_viewEngine);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * App controller class.
 */
var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.gameEngine = new _gameEngine2.default();
    this.viewEngine = new _viewEngine2.default();
  }

  _createClass(App, [{
    key: 'instanciateNewGame',
    value: function instanciateNewGame() {}
  }, {
    key: 'addPlayers',
    value: function addPlayers() {}
  }, {
    key: 'requestPlayerMove',
    value: function requestPlayerMove() {}
  }, {
    key: 'checkGameStatus',
    value: function checkGameStatus() {}
  }, {
    key: 'showFinishedGame',
    value: function showFinishedGame() {}
  }]);

  return App;
}();

exports.default = App;