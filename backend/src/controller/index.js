const clientsController = require('./clients.controller');
const authController = require('./auth.controller');
const employeeController = require('./employee.controller');
const wwebController = require('./wweb.controller');
const userController = require('./user.controller');
const emailMarketingAccess = require('./emailMarketingAccess.controller');
const sendController = require('./send.controller');
const meetingController = require('./meeting.controller')

module.exports = {
    sendController,
    clientsController,
    authController,
    employeeController,
    wwebController,
    userController,
    emailMarketingAccess,
    meetingController
};