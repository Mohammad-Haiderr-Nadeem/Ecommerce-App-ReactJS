const jwt = require('jsonwebtoken');

//middleware for login
const loginUser = async (req, res, next) => {
    const { email } = req.body.email;
    const token = await jwt.sign(
        {
            email: email,
        },
        "jwt-secret-key",
        {
            expiresIn: '1h',
        }
    );
    if(token) {
        req.accessToken = token;
    }
    next();
}

module.exports = { loginUser };