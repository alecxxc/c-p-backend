const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json({ message: 'Transacción registrada exitosamente', transaction });
    console.log('Transacción registrada');
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar la transacción', error });
    console.log('Error al registrar la transacción:', error);
  }
};