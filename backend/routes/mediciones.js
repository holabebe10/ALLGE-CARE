const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM mediciones', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error al obtener mediciones' });
    res.json(results);
  });
});

module.exports = router;