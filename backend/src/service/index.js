const clientsService = require('./clients.service');
const authService = require('./auth.service');
const employeeService = require('./employee.service');
const userService = require('./users.service');
const emailMarketingAccess = require('./emailMarketingAccess.service');
const sendService = require('./send.service');
const meetingService = require('./meeting.service');

module.exports = {
    clientsService,
    authService,
    employeeService,
    userService,
    emailMarketingAccess,
    sendService,
    meetingService
};