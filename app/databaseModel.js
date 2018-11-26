"use strict";

/**
 * Mongoose Schema Game Model.
 */

// Imports
import mongoose from 'mongoose';

/**
 * Database description of a complete Game.
 */
var gameSchema = new mongoose.Schema({
    player1: { type: Object, required: true } ,
    player2: { type: Object, required: true } ,
    gameBoard: { type: Object, required: true } ,
    winner:  { type: String, required: true } ,
    roundNumber:  { type: Number, required: true } ,
  });

var Game = mongoose.model('Game', gameSchema);

export default Game;
