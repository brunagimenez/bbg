const { authApi } = require("./auth");

const usersUpDateUsername = async (client_id, username) => {
    const apiUrl = `https://bbgsolutions.onrender.com/user/username/${client_id}`;

    const requestBody = {
      client_id,
      username
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

const usersApiUpDatePassword = async (client_id, password) => {
    const apiUrl = `https://bbgsolutions.onrender.com/user/password/${client_id}`;
    const requestBody = {
      client_id,
      password
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
    usersUpDateUsername,
    usersApiUpDatePassword
};
