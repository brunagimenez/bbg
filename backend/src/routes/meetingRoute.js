const express = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {meetingController} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, meetingController.findAll);
route.get('/:id', validateJwt, meetingController.findByClientId);
route.post('/', validateJwt, meetingController.create);
route.put('/:id', validateJwt, meetingController.update);
route.delete('/:id', validateJwt, meetingController.deleteById);

module.exports = route;