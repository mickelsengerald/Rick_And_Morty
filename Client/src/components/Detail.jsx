import axios from "axios"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} =useParams()
    const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
    const API_KEY = "a47b7c3f8b26.7ce61050355f4fea750d"

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => { // axios (`${URL_BASE}/${id}?key=${API_KEY}`)
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div>
            {character.name && (                                                        
                <div>
                    <h2>{character.name}</h2>
                    <h3>Status: {character.status}</h3>
                    <h3>Species: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin.name}</h3>
                    <img src={character.image} alt={character.name} />
                </div>
            )}
        </div>
        /* 
        <div>
            <h2>{character?.name}</h2> pregunta si esta y lo muestra
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
        */
    )
}

export default Detail