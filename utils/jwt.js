const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/index');


function generateToken(admin){
    const key = jwtSecret;
    return jwt.sign(
        { id: admin._id, },
        key,
        { expiresIn: '1h' }
    )  
}

module.exports = generateToken;