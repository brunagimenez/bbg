const { authApi } = require("./auth");

const sendEmailApi = async (name, email, phone, company, sizeCompany, invoicing) => {
    const apiUrl = 'https://bbgsolutions.onrender.com/sendEmail';
    const requestBody = {
      name: name,
      email: email,
      phone: phone,
      company: company,
      sizeCompany: sizeCompany,
      invoicing: invoicing
    };
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);
    
    try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();

      return responseData;
  } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
  }
};

const sendEmail = async (email, title, url) => {
    const apiUrl = 'https://bbgsolutions.onrender.com/sendEmail/send';
    const requestBody = {
      email: email,
      title: title,
      url: url
    };
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);

    try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();

      return responseData;
  } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
  }
}

module.exports = { 
    sendEmailApi,
    sendEmail
};
