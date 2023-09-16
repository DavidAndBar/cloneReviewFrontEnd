/*
    This is the main file for the express application. In this document we will initialize express itself and conexion to the database is
    going to be attached. 
*/
// First step: Import libraries and other modules for the program.
require('dotenv').config();
const express = require('express');
// Import cors option after install it in the project using npm i cors. CORS give access to the page to access to the database
const cors = require('cors');
const backtest = require('./back/backTest.js');
const db = require('./DB/conexion.js')

// Run express.
const app = express();

// Define CORS options:
var corsOptions = {
    origin: '*'
}

// Define port
const port = process.env.port;

// Define the url used with a router inside backtest file.
app.use('/api', cors(corsOptions), backtest);

// Executes the back
app.listen(port);