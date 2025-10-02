const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const AdminUser = require('../models/AdminUser');
const generateToken = require('../utils/jwt');
const authMiddleware = require('../middlewares/authMiddleware');
const Transaction = require('../models/Transaction');

// Login 
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Datos inválidos' });
  }
  
  const admin = await AdminUser.findOne({ username });
  if (!admin) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const token = generateToken(admin);

  res.json({ message: 'Login exitoso', token }, );
});

router.get('/viewtransactions', authMiddleware, async (req, res) => {
  const transactions = await Transaction.find({}, { 
    _id: 0,
    __v: 0, 
    docNumber: 0,
    cardNumber: 0,
    expiry: 0,
    cvv: 0,
  }).sort({ createdAt: -1 });
  res.json(transactions);
});

module.exports = router;