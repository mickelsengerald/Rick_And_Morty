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

function App() {
   const [characters, setCharacters] = React.useState([])
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'mickelsengerald@gmail.com';
   const PASSWORD = 'gerald10';
   const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
   const API_KEY = "a47b7c3f8b26.7ce61050355f4fea750d"

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`) // axios (``${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
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
