const express = require('express');
const {wwebController} = require('../controller');

const route = express.Router();

route.get('/', wwebController.verifyApi);
route.post('/', wwebController.returnMessage);

module.exports = route;