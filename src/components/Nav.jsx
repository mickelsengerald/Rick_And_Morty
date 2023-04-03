import SearchBar from './SearchBar.jsx'

export default function Nav ({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}