const axios = require('axios');
require('dotenv').config();

const url = process.env.URL_WHATSAPP;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': process.env.AUTHORIZATION_WHATSAPP
};

const sendMessage = async (number, message) => {
  const jsonMessage = {
    messaging_product: 'whatsapp',
    to: number,
    type: "template",
    template: {
      name: message,
      language: {
        code: "pt_BR"
      }
    }
  };

  try {
    await axios.post(url, jsonMessage, { headers });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response.data);
  }
};

const messageWithParameters = async (number, message, parameter) => {
  const jsonMessage = {
    messaging_product: 'whatsapp',
    to: number,
    type: "template",
    template: {
      name: message,
      language: {
        code: "pt_BR"
      },
      components: [{
        type: "body",
        parameters: [
          {
            type: "text",
            text: parameter,
          },
        ]
      }]
    }
  };

  try {
    await axios.post(url, jsonMessage, { headers });
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response.data);
  }
}

module.exports = {
  sendMessage,
  messageWithParameters,
};
