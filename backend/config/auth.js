const jwt = require('jsonwebtoken');

function auth(req, res, next){
    const token = req.header('auth-token');
    if (!token){
        return res.status(401).json({result: 'error', message: 'Access denied'});
    }

    try {
        const accessToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = accessToken;
        next();
    } catch(err) {
        res.status(400).json({result: 'error', message: 'Invalid token'});
    }
}

module.exports = auth;