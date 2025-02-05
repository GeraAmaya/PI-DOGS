require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const { Dog, Temperaments } = require('../db');
const URL = "https://api.thedogapi.com/v1/breeds/";

async function getAllDogsApi() {

   const { data } = await axios(`${URL}?api_key=${API_KEY}`);


        let dogsApi = data.map((dog) => {
            return {
                id: dog.id,
                image: dog.image.url,
                name: dog.name,
                height: dog.height.metric,
                weightMin: parseInt(dog.weight.metric.split("-")[0]),
                weightMax: parseInt(dog.weight.metric.split("-")[1]),
                temperament: dog.temperament,
                life_span: dog.life_span,
            }
        })

        return dogsApi;
    
}

async function getAllDogsDb() {
    let allDogsDb = await Dog.findAll({
        include:{
            model: Temperaments,
            atributes: ['name'],
            through:{
                attributes: [],
            }
        }
    })

        let dogsDb = allDogsDb.map((dog) => {
            return {
                id: dog.id,
                image: dog.image,
                name: dog.name,
                height: `${dog.heightMin}-${dog.heightMax}`,
                weightMin: dog.weightMin,
                weightMax: dog.weightMax,
                temperament: dog.temperaments.map(e => {return e.name}).join(','), /* recorrer el array que devuelve la DB y solo quedarse con el name */
                life_span: `${dog.life_span} years`,
                createInDb: dog.createInDb,
            }
        })
        
        return dogsDb;

}


const getAllDogs = async () =>{
    try {
        let dbDogs = await getAllDogsDb();
        let apiDogs = await getAllDogsApi();

        if(!dbDogs || !apiDogs) throw new Error('Error loading data');
    
        let allDogs = apiDogs.concat(dbDogs);
        return allDogs;
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
}


module.exports = {
getAllDogs,
getAllDogsApi,
getAllDogsDb
};