"use strict";

var App = require('./dist/app/app.js');
//var App = require('./app/app.js');

console.log("startup");

const app = new App();

if (app.instanciateNewGame()) app.roundLoop();