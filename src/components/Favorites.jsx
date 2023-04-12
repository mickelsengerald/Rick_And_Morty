import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { removeFav } from "../redux/actions";

function Favorites({ myFavorites, removeFav }) {
  const handleRemoveFav = (id) => {
    removeFav(id);
  };

  return (
    <div>
      <h1>Favorites</h1>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} onClose={handleRemoveFav} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);