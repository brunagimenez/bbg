const express = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {userController} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, userController.findAll);
route.get('/:id', validateJwt, userController.findById);
route.post('/', validateJwt, userController.create);
route.delete('/:id', validateJwt, userController.deleteById);
route.put('/password/:id', validateJwt, userController.updatePassword);
route.put('/username/:id', validateJwt, userController.updateUsername);

module.exports = route;