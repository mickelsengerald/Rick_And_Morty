const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (request, response) =>{
    try {
        const {id} = request.params
        const {data} = await axios(`${URL}${id}`)
        
        if(!data.name) throw new Error(`Faltan datos del pje ID: ${id}`);
        
        const character = {
            id: data.id,
            status: data.status,
            name: data.name,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            gender: data.gender,    
        }
        return response.status(200).json(character)
    } catch (error) {
        return error.message.includes("ID")
        ? response.status(404).send(error.message)
        : response.status(500).send(error.message)
        
    }
    
}

module.exports = getCharById;