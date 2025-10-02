const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/index');

const authMiddleware = async (req, res, next) => {
    const key = jwtSecret;
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, key);

            if (!decoded.id) {
                return res.status(401).json({ message: 'Token inválido: falta el ID del usuario en el payload.' });
            }

            next();
        } catch(error) {
            console.error('Error de verificación  de token', error);
            res.status(401).json({ message: 'No autorizado, token fallido o expirado' });
        }
    }
    if(!token) {
        res.status(401).json({ message: 'No autorizado, no hay token proporcionado' });
    }
};

module.exports = authMiddleware;