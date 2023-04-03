import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import React from "react"
import axios from 'axios';

function App() {
   const [characters, setCharacters] = React.useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const filterChars = characters.filter((char) => char.id !== parseInt(id))
      setCharacters(filterChars)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
