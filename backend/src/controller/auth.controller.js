const { authService } = require('../service');

const login = async (req,res) => {
    const { username, password } = req.body;
    const token = await authService.login({ username, password })
    return res.status(200).json({token});
};

module.exports = {
    login
};