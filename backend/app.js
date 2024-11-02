const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');
const historialRoutes = require('./routes/historialRoutes');
const db = require('./db/database');

const app = express();
app.use(bodyParser.json());

app.use('/usuario', usuarioRoutes);
app.use('/prestamo', prestamoRoutes);
app.use('/historial', historialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
