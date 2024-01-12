const getDogById = require ('../controllers/getDogById');
const getDogByName = require('../controllers/getDogByName');
const postDog = require('../controllers/postDog');
const getTemperaments = require('../controllers/getTemperaments');
const login = require ('../controllers/login')
const { Router } = require('express');
const router = Router();



router.get ("/dogs", getDogByName);
router.get ( "/dogs/:id", getDogById);
router.post ( "/dogs", postDog);
router.get ( "/temperaments", getTemperaments);




module.exports = router;
