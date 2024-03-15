const authApi = async (username, password) => {
    const apiUrl = 'https://bbgsolutions.onrender.com/auth/login';
    const requestBody = {
        username,
        password
    };
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json();

        return responseData.token;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
};

module.exports = { authApi };
