const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');


const convertHtml  = (url) => {
    const verifyEmailPath = path.join(__dirname, url);
    return fs.readFileSync(verifyEmailPath, 'utf8');
}

const sendEmailForm = (emailAccess, password, title, url) => {
    return new Promise((resolve, reject) => {
        let mailOptions;

        if (typeof url === 'function') {
            mailOptions = {
                from: emailAccess,
                to: emailAccess,
                subject: title,
                html: convertHtml(url)
            };
        } else {
            mailOptions = {
                from: emailAccess,
                to: emailAccess,
                subject: title,
                html: url
            };
        }
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: emailAccess,
                pass: password
            }
        });
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject({ type: 'INVALID_VALUE', message: '"email" or "password" invalid' });
            } else {
                resolve({ type: null, message: '' });
            }
        });
    });
};

const sendEmailRes = (emailAccess, password, client, title, url) => {
    return new Promise((resolve, reject) => {
        let mailOptions;

        if (typeof url === 'function') {
            mailOptions = {
                from: emailAccess,
                to: client,
                subject: title,
                html: convertHtml(url)
            };
        } else {
            mailOptions = {
                from: emailAccess,
                to: client,
                subject: title,
                html: url
            };
        }
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: emailAccess,
                pass: password
            }
        });
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                reject({ type: 'INVALID_VALUE', message: '"email" or "password" invalid' });
            } else {
                resolve({ type: null, message: '' });
            }
        });
    });
};

module.exports = {
    sendEmailForm,
    sendEmailRes,
};