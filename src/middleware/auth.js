const jwt = require('jsonwebtoken');

export const verifyToken = async (req, res, next) => {
    console.log(req.headers)
    try {
        const bearerHeader = req.headers['authorization']

        if (typeof bearerHeader !== 'undefined') {
            const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken;

            if (jwt.verify(req.token, 'secretkey')) {
                next()
            } else {
                return res.status(403).json({ message: "No valid token" });
            }

        } else {
            return res.status(403).json({ message: "No token provided" });
        }
    } catch (error) {
        return res.status(500).json({ message: "unauthorized" });
    }
}