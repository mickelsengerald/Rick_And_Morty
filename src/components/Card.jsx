import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";

export function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites, id]);
  

   const handleFavorite = () => {
      const isAlreadyFav = myFavorites.some((fav) => fav.id === id);

      if (isFav) {
        setIsFav(false);
        removeFav(id);
      } else if (!isAlreadyFav) {
        setIsFav(true);
        addFav({ id, name, status, species, gender, origin, image });
      }
    };


   return (
      <div>
         <button onClick={() => onClose && onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}>
            
            <h2>{name}</h2>
         </NavLink>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='' />
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)