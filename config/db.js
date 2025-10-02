const mongoose = require('mongoose');
const { mongoUri } = require('./index')

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log('Conectado a la base de datos MongoDB');
  } catch (error) {
    console.error('Error al conectar con la base de datos ', error);
  }
}

module.exports = connectDB;