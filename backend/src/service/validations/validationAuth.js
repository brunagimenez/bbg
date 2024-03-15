const { passwordIsEqual } = require("../../utils/Bcrypt");

const validateAuth = (user, { password }, client) => {
    if (!user) return {
        type: 'INVALID_VALUE', message: 'User Not Found'
    };
    if (!passwordIsEqual(password, user.password)) return {
        type: 'INVALID_VALUE', message: 'Invalid Username or Password'
    };
    if (user.role !== 'Admin') {
        const result = {
            message: 'Visiting user',
            username: user.username,
            role: user.role,
            client
        }
        return result
    };
};

module.exports = {
    validateAuth,
};