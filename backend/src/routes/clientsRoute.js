const express = require('express');
const validateNewClientFields = require('../middlewares/validateNewClientFields');
const {validateJwt} = require('../middlewares/validateJwt');
const {clientsController} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, clientsController.findAll);
route.get('/:id', validateJwt, clientsController.findById);
route.post('/', validateJwt, validateNewClientFields, clientsController.create);
route.delete('/:id', validateJwt, clientsController.deleteById);
route.put('/email/:id', validateJwt, clientsController.updateEmail);
route.put('/name/:id', validateJwt, clientsController.updateName);
route.put('/phone/:id', validateJwt, clientsController.updatePhone);
route.put('/cpf/:id', validateJwt, clientsController.updateCPF);

module.exports = route;