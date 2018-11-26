"use strict";

/**
 * Mongoose Schema Game Model.
 */

// Imports
import mongoose from 'mongoose';

/**
 * todo: REFACTOR so that players and gameBoard are broken up into attributes instead
 */
var gameSchema = new mongoose.Schema({
    players: { type: [], required: true } ,
    gameBoard: { type: Array, required: true } ,
    winner:  { type: String, required: true } ,
    roundNumber:  { type: Number, required: true } ,
  });

var Game = mongoose.model('Game', gameSchema);

export default Game;