
const express = require('express');
const router = express.Router();
const { getBreeds } = require('../controllers/controllersBreeds');

// Rutas
router.get('/breeds', getBreeds);

module.exports = router;
