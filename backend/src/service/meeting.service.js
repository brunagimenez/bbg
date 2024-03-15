const { meetingModel } = require('../model');
const schema = require('./validations/validationValues');

const findAll = async () => {
    try {
        const meeting = await meetingModel.findAll();
        return { type: null, message: meeting }
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const findByClientId = async (id) => {
    try {
        const error = schema.validateId(id);
        if (error.type) return error;
    
        const meeting = await meetingModel.findByClientId(id);
    
        if (!meeting) return { type: 'NOT_FOUND', message: 'Meeting not found' }
        
        return { type: null, message: meeting };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const create = async ( client_id, date ) => {
    try {
        const existingMeeting = await meetingModel.findByClientAndMonth(client_id, date);

        if (existingMeeting.length > 0) {
            return { type: 505, message: 'Cliente já possui uma reunião no mês fornecido' };
        }
        const error = await meetingModel.findByDate(date);
        if (error) return { type: 505, message: 'Data e hora indisponível' };
        const result = await meetingModel.create(client_id, date);
        const meeting = await meetingModel.findById(result[0].insertId);
        return { type: null, message: meeting };
    } catch (error) {
        return { type: 505, message: 'Esperado um client_id e um date no formato "2024-03-01T14:30:00' };
    }
};

const update = async (id, date) => {
    try {     
        const result = await meetingModel.update(id, date);
        return { type: null, message: result };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const deleteById = async (id) => {
    try {
        const meeting = await meetingModel.findById(id);
        if (!meeting) return { type: 'NOT_FOUND', message: 'Id not found' };
        
        await meetingModel.deleteById(id);
        return { type: null, message: meeting };
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
}

module.exports = {
    findAll,
    create,
    update,
    deleteById,
    findByClientId
};