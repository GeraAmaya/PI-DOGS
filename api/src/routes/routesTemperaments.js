
const express = require('express');
const router = express.Router();
const axios = require('axios');
const  Temperament  = require('../models/Temperament');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/temperament');

    if (response.status === 200) {
      const temperaments = response.data;
      res.json(temperaments);
    } else {
      console.error('Error en la solicitud a la API externa:', response.status, response.statusText);
      res.status(response.status).json({ error: 'Error en la solicitud a la API externa' });
    }
  } catch (error) {
    console.error('Error en la solicitud a la API externa:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
