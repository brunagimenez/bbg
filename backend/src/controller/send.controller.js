const { sendService } = require('../service');
const errorMap = require('../utils/errorMap');

const formMessageHome = async(req, res) => {
    const { name, email, phone, company, sizeCompany, invoicing } = req.body;

    const { type, message } = await sendService.formMessageHome( name, email, phone, company, sizeCompany, invoicing )

    if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const sendEmail = async(req, res) => {
  const { email, title, url } = req.body;
  const { message } = await sendService.sendEmail( email, title, url )
  res.status(201).json(message);

};


module.exports = {
    formMessageHome,
    sendEmail
};
