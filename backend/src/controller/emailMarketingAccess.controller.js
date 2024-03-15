const { emailMarketingAccess } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    const { type, message } = await emailMarketingAccess.findAll();

    if (type) return res.status(errorMap.mapError(type)).json(message);
    return res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await emailMarketingAccess.findById(id);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
  };

const create = async (req, res) => {
    const { email, password, clientId  } = req.body;

    const { type, message } = await emailMarketingAccess.create( email, password, clientId )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await emailMarketingAccess.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json(message);
};

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
};