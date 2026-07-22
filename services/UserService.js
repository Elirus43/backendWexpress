const bcrypt = require('bcrypt');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function registerUser(user)
{
    let salt = await bcrypt.genSalt(10); // Salt making
    let hashedPassword = await bcrypt.hash(user.password, salt); // Hashed pw, combine pw + salt after that hashed
    let newUser = new User({
        username: user.username,
        password: hashedPassword,
        role:user.role,
    })
    let registeredUser = await newUser.save();  // Saved user in DB
    // Payload release
    let payload = {
        username: registeredUser.username,
        role:registeredUser.role,
    }
    // Registration success, jwt token return (payload, secret_token parameter) payload should contain non-sensitive data
    let token = jwt.sign(payload, config.TOKEN_SECRET);
    return {token};
}

// Login concept
async function loginUser(user)
{
    // find username in DB
    let registeredUser = await User.findOne({
        username: user.username,
    });
    if(!registeredUser)     // Doesn't exist throw error
    {
        throw new Error('Invalid user');
    }
    else {  // exist? compare pws
        const valid = await bcrypt.compare(user.password, registeredUser.password);
        // bcrypt.compare took salt from db, combine with user input pw, calculate hash again and then compare hash with db hash
        if(!valid)
        {
            throw new Error('Invalid password');
        }
        else {
            let payload = {
                username: registeredUser.username,
                role: registeredUser.role,
            }
            let token = jwt.sign(payload, config.TOKEN_SECRET);
            return {token};
        }
    }
}

module.exports = {
    registerUser,
    loginUser,
}