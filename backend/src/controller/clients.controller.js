const { clientsService } = require('../service');
const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
    const { type, message } = await clientsService.findAll();

    if (type) return res.status(errorMap.mapError(type)).json(message);

    return res.status(200).json(message);
};

const findById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await clientsService.findById(id);

    if (type) return res.status(errorMap.mapError(type)).json({ message });

    res.status(200).json(message);
  };

const create = async (req, res) => {
    const { name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id  } = req.body;

    const { type, message } = await clientsService.create( name, phone, email, razao_social, inscricao_estadual, cpf, cnpj, cep, address, city_id, state_id )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  
  const { type, message } = await clientsService.deleteById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json(message);
};

const updatePhone = async (req, res) => {
  try {     
      const { id } = req.params;
      const { phone } = req.body;

      const { type, message } = await clientsService.updatePhone(id, phone);

      if (type) return res.status(errorMap.mapError(type)).json({ message });
      res.status(200).json(message);
  } catch (error) {
      return { type: 505, message: 'Error service' };
  }
};

const updateEmail = async (req, res) => {
  try {     
      const { id } = req.params;
      const { email } = req.body;

      const { type, message } = await clientsService.updateEmail(id, email);

      if (type) return res.status(errorMap.mapError(type)).json({ message });
      res.status(200).json(message);
  } catch (error) {
      return { type: 505, message: 'Error service' };
  }
};

const updateName = async (req, res) => {
  try {     
      const { id } = req.params;
      const { name } = req.body;

      const { type, message } = await clientsService.updateName(id, name);

      if (type) return res.status(errorMap.mapError(type)).json({ message });
      res.status(200).json(message);
  } catch (error) {
      return { type: 505, message: 'Error service' };
  }
};

const updateCPF = async (req, res) => {
  try {     
      const { id } = req.params;
      const { cpf } = req.body;

      const { type, message } = await clientsService.updateCPF(id, cpf);

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
    updatePhone,
    updateEmail,
    updateName,
    updateCPF
};