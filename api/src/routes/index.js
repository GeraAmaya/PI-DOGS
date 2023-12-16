const { Router } = require('express');
const dogsRoutes = require('./routesDogs.js');
const temperamentsRoutes = require('./routesTemperaments.js');


const router = Router();

// Configurar los routers

router.use('/dogs', dogsRoutes);
router.use('/temperaments', temperamentsRoutes);


module.exports = router;