import React from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = React.useState("")

   const handleChange = (event) => {
      const value = event.target.value
      setId(value)
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
