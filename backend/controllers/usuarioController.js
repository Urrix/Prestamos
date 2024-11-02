const db = require('../db/database');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
    const { nombre, direccion, telefono, correo, tipo_usuario, nombre_usuario, contrasena } = req.body;
    const hashedPassword = bcrypt.hashSync(contrasena, 8); // Cifra la contraseña

    const sql = 'INSERT INTO Usuario (nombre, direccion, telefono, correo, tipo_usuario, nombre_usuario, contrasena) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [nombre, direccion, telefono, correo, tipo_usuario, nombre_usuario, hashedPassword];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario en la base de datos:', err);
            return res.status(500).json({ message: 'Error en el registro del usuario.', error: err });
        }

        if (result.affectedRows > 0) {
            return res.status(201).json({ message: 'Usuario registrado exitosamente.' });
        } else {
            return res.status(500).json({ message: 'No se pudo registrar el usuario.' });
        }
    });
};

exports.loginUser = (req, res) => {
    const { nombre_usuario, contrasena } = req.body;
    const sql = 'SELECT * FROM Usuario WHERE nombre_usuario = ?';

    db.query(sql, [nombre_usuario], (err, results) => {
        if (err) {
            console.error('Error en la consulta de inicio de sesión:', err);
            return res.status(500).json({ message: 'Error en el inicio de sesión.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(contrasena, user.contrasena);
        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        return res.status(200).json({ message: 'Inicio de sesión exitoso.' });
    });
};

