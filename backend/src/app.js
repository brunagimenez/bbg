const express = require('express');
const cors = require('cors'); 
const { clientsRoute, authRoute, employeeRoute, wwebRoutes, userRoute, emailMarketingAccessRoute, sendEmailRoute, meetingRoute} = require('./routes');

const app = express();

app.use(cors());


app.use(express.json());


app.get('/', (_req, res) => {
    res.json({ status: 'Store Manager UP!' });
});
app.use('/webhook', wwebRoutes);
app.use('/clients', clientsRoute);
app.use('/auth', authRoute);
app.use('/employee', employeeRoute);
app.use('/user', userRoute);
app.use('/emailAccess', emailMarketingAccessRoute);
app.use('/sendEmail', sendEmailRoute);
app.use('/meeting', meetingRoute);

module.exports = app;