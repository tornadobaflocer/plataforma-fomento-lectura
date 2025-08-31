const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Bienvenido a la Plataforma Fomento Lectura!');
});

// Start the server with error handling
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error al iniciar el servidor:', err);
    return;
  }
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});