const { sendEmailRes, sendEmailForm } = require('../utils/Email');
const { createUsername, generatePassword } = require('../utils/createUser');
const { cadForm } = require('../utils/emailsHtml/cadForm');
const { formEmailHTML } = require('../utils/emailsHtml/formHome');
const clientsService = require('./clients.service');
const userService = require('./users.service');
require('dotenv').config();

const formMessageHome = async (name, email, phone, company, sizeCompany, invoicing) => {
    const emailLowerCase = email.toLowerCase();

    const messageErro = `${emailLowerCase} já cadastrado!`;

    const { message } = await clientsService.findByEmail(emailLowerCase);
    if (message) {
        return { type: 'INVALID_VALUE', message: messageErro }
    }

    const result = await clientsService.create(name,phone,emailLowerCase,company,null, null, null, null, null, null, null);
    const username = createUsername(email);
    const passwordUser = generatePassword();

    await userService.create(username, passwordUser, result.message.id, null, 'visit');

    const passwordEmail = process.env.PASSWORD_EMAIL;
    const emailBBG = process.env.EMAIL;
    const title = 'FAÇA JÁ SEU AGENDAMENTO PARA SUA CONSULTORIA';

    await sendEmailRes(emailBBG, passwordEmail, emailLowerCase, title, formEmailHTML(username,passwordUser))
    
    await sendEmailForm(emailBBG, passwordEmail, `Cadastro ${emailLowerCase}`, cadForm(name, emailLowerCase, phone, company, sizeCompany, invoicing));

    return { type: null, message: 'SUCESSO!' };
};

const sendEmail = async(email, title, url) => {
    const passwordEmail = process.env.PASSWORD_EMAIL;
    const emailBBG = process.env.EMAIL

    await sendEmailRes(emailBBG, passwordEmail, email, title, url);

    return { type: null, message: 'SUCESSO!' }
};



module.exports = {
    formMessageHome,
    sendEmail,
};
