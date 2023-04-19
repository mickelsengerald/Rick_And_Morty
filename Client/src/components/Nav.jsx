import SearchBar from './SearchBar.jsx'
import { NavLink } from 'react-router-dom'

export default function Nav ({onSearch, onLogout}){
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/">
                <button onClick={onLogout}>Log out</button>
            </NavLink>
            <NavLink to="/favorites">
                <button>Favorites</button>
            
            </NavLink>
        </nav>
    )
}