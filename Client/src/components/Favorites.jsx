import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { removeFav, filterCards, orderCards } from "../redux/actions";

function Favorites({ myFavorites, removeFav }) {
  const handleRemoveFav = (id) => {
    removeFav(id);
  };

  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState("A");

  useEffect(() => {
  dispatch(filterCards(selectedFilter));
  dispatch(orderCards(selectedOrder));
}, [selectedFilter, selectedOrder, dispatch]);

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      <h1>Favorites</h1>
      <select name="opcion" onChange={handleOrder} id="">
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="genero" onChange={handleFilter} id="">
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} onClose={handleRemoveFav} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.filteredFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);