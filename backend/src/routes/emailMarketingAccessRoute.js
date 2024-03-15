const express = require('express');
const {validateJwt} = require('../middlewares/validateJwt');
const {emailMarketingAccess} = require('../controller');

const route = express.Router();

route.get('/', validateJwt, emailMarketingAccess.findAll);
route.get('/:id', validateJwt, emailMarketingAccess.findById);
route.post('/', validateJwt, emailMarketingAccess.create);
route.delete('/:id', validateJwt, emailMarketingAccess.deleteById);

module.exports = route;