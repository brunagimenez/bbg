const { clientsModel } = require('../model');
const schema = require('./validations/validationValues');

const findAll = async () => {
    const result = await clientsModel.findAll();
    return { type: null, message: result}
};

const findById = async (clientId) => {
    const error = schema.validateId(clientId);
    if (error.type) return error;

    const client = await clientsModel.findById(clientId);

    if (!client) return { type: 'NOT_FOUND', message: 'Client not found' }
    
    return { type: null, message: client };
}

const create = async ( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id ) => {

    const error = schema.validateNewClient(name);
    if (error.type) return error;

    const newClient = await clientsModel.create( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id );
    const newClientId = newClient[0].insertId;
    const client = await clientsModel.findById(newClientId);

    return { type: null, message: client };

};

const deleteById = async (clientId) => {
    const client = await clientsModel.findById(clientId);
    if (!client) return { type: 'NOT_FOUND', message: 'Client not found' };
    
    await clientsModel.deleteById(clientId);
    return { type: null, message: client };
};

const findByCpf = async (cpf) => {
    try {
        const client = await clientsModel.findByCpf(cpf);
        return { type: null, message: client };
    } catch (error) {
        return { type: 'NOT_FOUND', message: 'Client not found' }
    }
};

const findByEmail = async (email) => {
    try {
        const client = await clientsModel.findByEmail(email);
        return { type: null, message: client };
    } catch (error) {
        return { type: 'NOT_FOUND', message: 'Client not found' }
    }
};

const findByCnpj = async (cnpj) => {
    try {
        const client = await clientsModel.findByCnpj(cnpj);
        return { type: null, message: client };
    } catch (error) {
        return { type: 'NOT_FOUND', message: 'Client not found' }
    }
};

const updateEmail = async (id, email) => {
    try {     
        const result = await clientsModel.updateEmail(id, email);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const updateCPF = async (id, cpf) => {
    try {     
        const result = await clientsModel.updateCPF(id, cpf);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const updateName = async (id, name) => {
    try {     
        const result = await clientsModel.updateName(id, name);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const updatePhone = async (id, phone) => {
    try {     
        const result = await clientsModel.updatePhone(id, phone);
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
    findByCpf,
    findByCnpj,
    findByEmail,
    updateEmail,
    updateName,
    updatePhone,
    updateCPF
};