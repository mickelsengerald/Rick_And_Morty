import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import React from "react"
import axios from 'axios';
import {Routes, Route} from "react-router-dom"
import Error from './components/Error.jsx';

function App() {
   const [characters, setCharacters] = React.useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const filterChars = characters.filter((char) => char.id !== parseInt(id))
      setCharacters(filterChars)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
           
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
