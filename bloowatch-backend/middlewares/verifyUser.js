// const jwt = require('jsonwebtoken');

// //verify a user
// const verifyUser = async (req, res, next) => {
//     const { accessToken } = req;
//     if (!accessToken) {
//         return res.status(401).json({ error: 'Token missing' });
//     }
//     try {
//         const decodedToken = jwt.verify(accessToken, 'jwt-secret-key'); 
//         req.user = decodedToken;
//         next();
//     } catch (error) {
//         return res.status(401).json({ error: 'Invalid token' });
//     }
// }

// module.exports = { verifyUser };

const jwt = require('jsonwebtoken');

// Verify a user
const verifyUser = async (req, res, next) => {
    const { accessToken } = req;
    if (!accessToken) {
        return res.status(401).json({ error: 'Token missing' });
    }
    try {
        const decodedToken = jwt.verify(accessToken, 'jwt-secret-key');
        req.user = decodedToken;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        } else {
            return res.status(401).json({ error: 'Invalid token' });
        }
    }
}

module.exports = { verifyUser };
