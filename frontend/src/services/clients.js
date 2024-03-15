const { authApi } = require("./auth");

const clientUpdateName = async (client_id, name) => {
    const apiUrl = `https://bbgsolutions.onrender.com/clients/name/${client_id}`;
    const requestBody = {
      client_id,
      name
    };
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);
    
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
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

const clientUpdateEmail = async (client_id, email) => {
    const apiUrl = `https://bbgsolutions.onrender.com/clients/email/${client_id}`;
    const requestBody = {
      client_id,
      email
    };
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);
    
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
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

const clientUpdatePhone = async (client_id, phone) => {
    const apiUrl = `https://bbgsolutions.onrender.com/clients/phone/${client_id}`;
    const requestBody = {
      client_id,
      phone
    };
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);
    
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
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

module.exports = { 
    clientUpdateName,
    clientUpdateEmail,
    clientUpdatePhone
};
