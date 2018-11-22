"use strict";

/**
 * Mongoose Schema Game Model.
 */

// Imports
import mongoose from 'mongoose';

var gameSchema = new mongoose.Schema({
  });

var Game = mongoose.model('Game', gameSchema);

export default Game;