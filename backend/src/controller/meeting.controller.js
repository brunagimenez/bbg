const { meetingService } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    try {        
        const { type, message } = await meetingService.findAll();
    
        if (type) return res.status(errorMap.mapError(type)).json(message);
        return res.status(200).json(message);
    } catch (error) {
        return { type: 505, message: 'Error controller' };
    }
};

const findByClientId = async (req, res) => {
    try {        
        const { id } = req.params;
        const { type, message } = await meetingService.findByClientId(id);
    
        if (type) return res.status(errorMap.mapError(type)).json({ message });
    
        res.status(200).json(message);
    } catch (error) {
        return { type: 505, message: 'Error controller' };
    }
  };

const create = async (req, res) => {
    try {        
        const { client_id, date  } = req.body;
    
        const { type, message } = await meetingService.create( client_id, date )
    
        if (type) return res.status(errorMap.mapError(type)).json({ message });
    
        res.status(201).json(message);
    } catch (error) {
        return { type: 505, message: 'Error controller' };
    }
}

const update = async (req, res) => {
    try {     
        const { id } = req.params;
        const { date } = req.body;

        const { type, message } = await meetingService.update(id, date );

        if (type) return res.status(errorMap.mapError(type)).json({ message });
        res.status(200).json(message);
    } catch (error) {
        return { type: 505, message: 'Error service' };
    }
};

const deleteById = async (req, res) => {
    try {        
        const { id } = req.params;
        
        const { type, message } = await meetingService.deleteById(id);
      
        if (type) return res.status(errorMap.mapError(type)).json({ message });
        res.status(204).json(message);
    } catch (error) {
        return { type: 505, message: 'Error controller' };
    }
};

module.exports = {
    findAll,
    create,
    findByClientId,
    update,
    deleteById,
};