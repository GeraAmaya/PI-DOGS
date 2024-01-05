require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Temperaments} = require('../db');
const URL = "https://api.thedogapi.com/v1/breeds/";


async function getTemperaments(req, res) {
try {
    
    const { data } = await axios(`${URL}?api_key=${API_KEY}`);
    
    let dogsTemp = await data.map((dog) => dog.temperament);  /* obtener la propiedad temperament */
    let divTemps = await dogsTemp.join().split(',');  /* Separar los temperamentos y unirlos en un array */
    let temps = await divTemps.map(e => e.trim())


    await temps.forEach( async(temperament) => { 
        if (temperament.length > 0){   /* si existe un temp */
            await Temperaments.findOrCreate({where:{name: temperament}}) /* Encontrar o crear el temperamento en mi tabal de la DB  */
        }
    });

    const allTemperaments = await Temperaments.findAll();  /* Obtener todos los temperamentos (array) de mi DB */

    return res.status(200).json(allTemperaments); 

} catch (error) {
    res.status(500).send(error.message)
}

}

module.exports = getTemperaments;