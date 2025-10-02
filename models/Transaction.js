const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  currency: { type: String, enum: ['COP', 'USD'], required: true },
  value: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  typeDocument: { type: String, enum: ['cedula', 'passport'], required: true },
  docNumber: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiry: { type: String, required: true },
  cvv: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);