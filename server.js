const express = require('express');

const app = express();
const PORT = 3000;

// Permite recibir datos JSON
app.use(express.json());

// Ruta POST
app.post('/registro', (req, res) => {
    const { nombre, mensaje } = req.body;

    res.json({
        estado: 'Datos recibidos',
        nombre,
        mensaje
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });

});