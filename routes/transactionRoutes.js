const express = require('express');
const router = express.Router();
const { createTransaction } = require('../controller/transactionController');

router.post('/transaction', createTransaction);

module.exports = router;