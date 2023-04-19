const axios = require("axios");

const getCharById = (response, id) =>{
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((responseAPI) => {
        const char = {
            id: responseAPI.data.id,
            name: responseAPI.data.name,
            gender: responseAPI.data.gender,
            origin: responseAPI.data.origin.name,
            image: responseAPI.data.image,
            status: responseAPI.data.status
        }
    
        response.writeHead(200, {"Content-Type": "aplication/json"})
        response.end(JSON.stringify(char))
    })
    .catch((error)=>{
        response.writeHead(500, {"Content-Type": "text/plain"})
        response.end(error.message)
    })
}

module.exports = getCharById;