import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import React from "react"
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Error from './components/Error.jsx';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import Favorites from "./components/Favorites";
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const [characters, setCharacters] = React.useState([])
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
  
  

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error.message);
      }
      
      
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`) 
      
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      }
       catch (error) {
         alert('¡No hay personajes con este ID!');
      }
      
   }

   function onClose(id) {
      const filterChars = characters.filter((char) => char.id !== (id))
      setCharacters(filterChars)
   }

   function logout() {
      setAccess(false);
      navigate("/");
    }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} onLogout={logout}/>}
         <Routes>
            <Route path="/" element={<Form onLogin={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
