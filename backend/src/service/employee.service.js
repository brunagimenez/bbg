const { employeeModel } = require('../model');
const { hashPassword } = require('../utils/Bcrypt');
const schema = require('./validations/validationValues');
const emailSchema = require('./validations/validationEmployee')

const findAll = async () => {
    const result = await employeeModel.findAll();
    return { type: null, message: result}
};

const findById = async (employeeId) => {
    const error = schema.validateId(employeeId);
    if (error.type) return error;

    const employee = await employeeModel.findById(employeeId);

    if (!employee) return { type: 'NOT_FOUND', message: 'Employee not found' }
    
    return { type: null, message: employee };
};

const findByEmail = async (email) => {
    try {
        const employee = await employeeModel.findByEmail(email);
        return { type: null, message: employee };
    } catch (error) {
        return { type: 'NOT_FOUND', message: 'Employee not found' }
    }
};


const create = async ( name, email, birthday, phone ) => {
    const error = await emailSchema.validateEmailExist(email);
    if (error.type) return error;
    const newEmployee = await employeeModel.create( name, email, birthday, phone );
    const newEmployeeId = newEmployee[0].insertId;
    const employee = await employeeModel.findById(newEmployeeId);

    return { type: null, message: employee };

};

const deleteById = async (employeeId) => {
    const employee = await employeeModel.findById(employeeId);
    if (!employee) return { type: 'NOT_FOUND', message: 'Employee not found' };
    
    await employeeModel.deleteById(employeeId);
    return { type: null, message: employee };
}

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    findByEmail,
};