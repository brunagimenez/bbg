const { usersModel, clientsModel } = require('../model');
const schema = require('./validations/validationAuth');
const {createToken} = require('../utils/JWT');

const login = async ({ username, password }) => {
    const user = await usersModel.findByUsername(username);
    if (!user) return {type: 'INVALID_VALUE', message: 'Invalid Username or Password'};
    if (user.clientId) {
        const client = await clientsModel.findById(user.clientId);
        error = schema.validateAuth(user, { password }, client);
    } else {
        error = schema.validateAuth(user, { password });
    }
    
    if (error) return error;;
    const payload = {
        id: user.id,
        role: user.role,
    }
    const token = createToken(payload);

    return token;
};



module.exports = {
    login,
};