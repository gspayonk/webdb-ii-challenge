const express = require('express');
const server = express();
const helmet = require('helmet');
const cors = require('cors');

const carsRouter = require('./data/car-routes');

server.use(express.json());

server.use(helmet());
server.use(cors());

server.use('/api/cars', carsRouter);




module.exports = server;