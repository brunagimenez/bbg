const {sendMessage, messageWithParameters} = require('../message/sendMessage');
const { validateClient } = require('../message/validadClient');

const verifyApi = async (req, res) => {
    res.status(200).send(req.query["hub.challenge"]).end();
};

const returnMessage = async(req, res) => {
    const { value } = req.body.entry[0]?.changes[0] || {};
    if (value && value.messages && value.messages[0]) {
        const { from } = value?.messages[0]
        const button = value?.messages[0].button?.text;
        const message = value?.messages[0].text?.body;
        switch (button) {
            case "Já Sou Cliente":
                await sendMessage(from, "client_inf");
                break;
            case "Quero ser Cliente":
                await sendMessage(from, "new_client");
                break;
            case "Não sou Cliente":
                await sendMessage(from, "new_client");
                break;
            case "Orçar":
                await messageWithParameters(from, "budget", "teste");
                break;
            case "Marcar Reunião":
                await messageWithParameters(from, "meeting", "teste");
                break;
            case "Sobre a BBG":
                await messageWithParameters(from, "about_bbg", "teste");
                break;
            case "Cursos/Apostilas":
                await messageWithParameters(from, "course", "teste");
                break;
            case "Dúvidas":
                await messageWithParameters(from, "query", "teste");
                break;
            case "Financeiro":
                await messageWithParameters(from, "financier", "teste");
                break;
            case "Ouvidoria":
                await messageWithParameters(from, "sac", "teste");
                break;
            case "Encerrar o atendimento":
                await sendMessage(from, "exit");
                break;
            case "Voltar ao início":
                await sendMessage(from, "__init__");
                break;
            default:
                if (message.length === 11 || message.length === 14) {
                    await validateClient(message, from);
                } else {
                    await sendMessage(from, "__init__");
                }
        }
    }
    res.status(200).end();
};

module.exports = {
    verifyApi,
    returnMessage,
};
