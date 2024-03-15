const { usersModel } = require('../model');
const { hashPassword } = require('../utils/Bcrypt');
const schema = require('./validations/validationValues');

const findAll = async () => {
    const users = await usersModel.findAll();
    return { type: null, message: users }
};

const findById = async (usersId) => {
    const error = schema.validateId(usersId);
    if (error.type) return error;

    const user = await usersModel.findById(usersId);

    if (!user) return { type: 'NOT_FOUND', message: 'User not found' }
    
    return { type: null, message: user };
};

const create = async ( username, password, clientId, employeeId, role ) => {
    const passworddHash = hashPassword(password);
    const newUser = await usersModel.create( username, passworddHash, clientId, employeeId, role );
    const newUserId = newUser[0].insertId;
    const user = await usersModel.findById(newUserId);

    return { type: null, message: user };

};

const deleteById = async (usersId) => {
    const user = await usersModel.findById(usersId);
    if (!user) return { type: 'NOT_FOUND', message: 'User not found' };
    
    await usersModel.deleteById(usersId);
    return { type: null, message: user };
}

const updatePassword = async (id, password) => {
    try {   
        const passworddHash = hashPassword(password);  
        const result = await usersModel.updatePassword(id, passworddHash);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const updateUsername = async (id, username) => {
    try {   
        const result = await usersModel.updateUsername(id, username);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    updatePassword,
    updateUsername
};