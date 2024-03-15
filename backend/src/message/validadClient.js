const axios = require('axios');
const { messageWithParameters, sendMessage } = require('./sendMessage');
const { clientsService } = require('../service');

const validateClient = async (msg, from) => {
  try {
    const { type, message } = await clientsService.findAll();
    if (type) return res.status(errorMap.mapError(type)).json(message);

    const foundClient = message.find(client => client.cpf === msg || client.cnpj === msg);
    if (foundClient) {
      return messageWithParameters(from, "valid_client", foundClient.name);
    } else {
      return sendMessage(from, "client_invalid");
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response.data);
  }
};

module.exports = {
    validateClient,
};
