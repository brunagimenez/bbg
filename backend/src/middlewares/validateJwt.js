const { decodeToken } = require("../utils/JWT");

const validateJwt = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(403).json({ message: 'token is required' });
        }

        const token = authorization.split(' ')[1];
        decodeToken(token);
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    return next();
};

module.exports = {
    validateJwt,
};