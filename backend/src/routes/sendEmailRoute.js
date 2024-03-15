const express = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {sendController} = require('../controller');

const route = express.Router();

route.post('/',validateJwt, sendController.formMessageHome);
route.post('/send',validateJwt, sendController.sendEmail);

module.exports = route;