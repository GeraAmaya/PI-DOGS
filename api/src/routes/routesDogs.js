// routes/dogs.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Dog = require('../models/Dog')
const Temperament = require('../models/Temperament');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogs = response.data;
    res.json(dogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:idRaza', async (req, res) => {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${req.params.idRaza}`);
    const dog = response.data;

    // Agregar temperamentos desde la base de datos
    const temperaments = await Temperament.findAll({ where: { id: dog.temperament } });
    dog.temperaments = temperaments;

    res.json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/name', async (req, res) => {
  try {
    const { name } = req.query;
    const dogs = await Dog.findAll({
      where: { name: { [sequelize.Op.iLike]: `%${name}%` } },
      include: Temperament,
    });
    if (dogs.length > 0) {
      res.json(dogs);
    } else {
      res.status(404).json({ message: 'No dogs found with that name' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, image, height, weight, life_span, temperaments } = req.body;

    // Crear el perro en la base de datos
    const dog = await Dog.create({
      name,
      image,
      height,
      weight,
      life_span,
    });

    // Asociar los temperamentos al perro
    const selectedTemperaments = await Temperament.findAll({
      where: { name: { [sequelize.Op.in]: temperaments } },
    });

    await dog.setTemperaments(selectedTemperaments);

    res.status(201).json(dog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
