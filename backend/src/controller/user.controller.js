const { userService } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    const { type, message } = await userService.findAll();

    if (type) return res.status(errorMap.mapError(type)).json(message);
    return res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.findById(id);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
  };

const create = async (req, res) => {
    const { username, password, client_id, employee_id, role  } = req.body;

    const { type, message } = await userService.create( username, password, client_id, employee_id, role )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await userService.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json(message);
};

const updateUsername = async (req, res) => {
  try {     
      const { id } = req.params;
      const {username} = req.body;

      const { type, message } = await userService.updateUsername(id, username );

      if (type) return res.status(errorMap.mapError(type)).json({ message });
      res.status(200).json(message);
  } catch (error) {
      return { type: 505, message: 'Error service' };
  }
};

const updatePassword = async (req, res) => {
  try {     
      const { id } = req.params;
      const {password} = req.body;

      const { type, message } = await userService.updatePassword(id, password );

      if (type) return res.status(errorMap.mapError(type)).json({ message });
      res.status(200).json(message);
  } catch (error) {
      return { type: 505, message: 'Error service' };
  }
};

module.exports = {
    findAll,
    create,
    findById,
    deleteById,
    updateUsername,
    updatePassword
};