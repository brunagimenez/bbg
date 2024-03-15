const { emailMarketingAccess } = require('../model');
const { hashPassword } = require('../utils/Bcrypt');
const { sendEmailForm } = require('../utils/Email');
const schema = require('./validations/validationValues');

const findAll = async () => {
    const emailAccess = await emailMarketingAccess.findAll();
    return { type: null, message: emailAccess }
};

const findById = async (id) => {
    const error = schema.validateId(id);
    if (error.type) return error;

    const emailAccess = await emailMarketingAccess.findById(id);

    if (!emailAccess) return { type: 'NOT_FOUND', message: 'Zoho not found' }
    
    return { type: null, message: emailAccess };
};

const create = async ( email, password, clientId ) => {
    try {
        const title = 'Email validado com sucesso!'
        const url = '../utils/emailsHtml/verifyEmail.html'
        const error = await sendEmailForm(email, password, title, url);
        if (error.type) return error;
        const passworddHash = hashPassword(password);
        const result = await emailMarketingAccess.create(email, passworddHash, clientId);
        const emailUser = await emailMarketingAccess.findById(result[0].insertId);
        return { type: null, message: emailUser };
    } catch (error) {
        return { type: 505, message: 'deu alguma merda' };
    }
};

const update = async (client_id, newData) => {
    const result = await emailMarketingAccess.update(client_id, newData);

    return { type: null, message: result };
};

const deleteById = async (id) => {
    const emailAccess = await emailMarketingAccess.findById(id);
    if (!emailAccess) return { type: 'NOT_FOUND', message: 'Id not found' };
    
    await emailMarketingAccess.deleteById(id);
    return { type: null, message: emailAccess };
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    deleteById
};