const {Dog, Temperaments} = require('../db');
const {getAllDogsApi} = require('./getAllDogs');


async function postDog(req, res) {
try {
    const {image, name, heightMin, heightMax, weightMin, weightMax,temperament, life_span} = req.body;


    // Si el temperamento esta en la DB
    let temperamentDb = await Temperaments.findOne({where:{name: temperament}});

    // Si el dog ya existe en la Api
    let dogNameApi = await getAllDogsApi().then((dog) => dog.find((dog) => dog.name === name));
    
    // VALIDACIONES
    if (!image || !name || !heightMax || !heightMax || !weightMin || !weightMax || !life_span || !temperament){
        return res.status(400).send('Your dog is not complete, data is missing');  
    }
    if (heightMax < heightMin || weightMax < weightMin) return res.status(400).send('Incorrect data, check your information');
    if (heightMin < 0 || weightMin < 0) return res.status(400).send('Invalid data');
    if(temperamentDb === null) return res.status(400).send('Invalid Temperament'); 
    
    
    // Buscar o Crear el perro
    const [dog, created] = await Dog.findOrCreate({where:{name}, defaults:{image,name, heightMin, heightMax, weightMin, weightMax, life_span}});

    if (!created || dogNameApi) return res.status(404).send('The dog already exist');

    // busca el temperamento en la DB para asociarlo al perro
    let tempeDb = await Temperaments.findAll({
        where: {name:temperament}
    })

// Relacion entre modelo dog y temperaments(asocia los temperamentos al perro)
    await dog.addTemperaments(tempeDb);

    let newDog = await Dog.findByPk(dog.id,{
        include:{
            model:Temperaments,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })

    return res.status(201).json({dog: newDog, message:'The dog was created successfully'});
} catch (error) {
    return res.status(500).send(error.message);
}

}

module.exports = postDog;