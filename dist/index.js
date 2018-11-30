"use strict";

var App = require('./app/app.js');

console.log("startup");

var app = new App();

if (app.instanciateNewGame()) app.roundLoop();