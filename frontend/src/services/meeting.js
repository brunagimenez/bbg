const { authApi } = require("./auth");

const meetingApi = async (client_id, date) => {
    const apiUrl = 'https://bbgsolutions.onrender.com/meeting';
    const requestBody = {
      client_id,
      date
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

const meetingApiGetId = async (client_id) => {
    const apiUrl = `https://bbgsolutions.onrender.com/meeting/${client_id}`;

    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);

    try {
      const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
          },
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

const meetingApiDelete = async (id) => {
    const apiUrl = `https://bbgsolutions.onrender.com/meeting/${id}`;
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        // Verificar se a resposta tem dados antes de fazer o parsing
        const responseData = response.status === 204 ? null : await response.json();
        console.log('Delete Successful:', responseData);

        return responseData;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};

const meetingApiGet = async () => {
    const apiUrl = 'https://bbgsolutions.onrender.com/meeting';
    const authToken = await authApi(process.env.REACT_APP_USERNAME_DB, process.env.REACT_APP_PASSWORD_DB);

    try {
      const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
          },
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
    meetingApi,
    meetingApiGetId,
    meetingApiDelete,
    meetingApiGet
};
