const userService = require('../services/UserService');

async function registerUser(req, res)
{
    try
    {
        let user = req.body;
        let token = await userService.registerUser(user);
        res.json({
            token,
        })
    }
    catch(err)
    {
        res.status(400).json({
            message: err.message,
        })
    }
}

async function loginUser(req, res)
{
    try
    {
        let user = req.body;
        let token = await userService.loginUser(user);
        res.json({
            message: "Login Successful",
            token,
        })
    }
    catch(err)
    {
        res.status(401).json({
            message: err.message,
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}