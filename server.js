const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const { port } = require('./config/index');
const transactionRoutes = require('./routes/transactionRoutes');
const adminRoutes = require('./routes/adminRoutes');


const corsOptions = {
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', transactionRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('API Funcionando');
});

connectDB();

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});