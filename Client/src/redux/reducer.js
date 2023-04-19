import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
        filteredFavorites: [...state.filteredFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
        filteredFavorites: state.filteredFavorites.filter((char) => char.id !== action.payload),
      };
    case FILTER:
      return {
        ...state,
        filteredFavorites:
          action.payload === "All"
            ? state.myFavorites
            : state.myFavorites.filter((char) => char.gender === action.payload),
      };
    case ORDER:
      const sortedCharacters = [...state.filteredFavorites].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        filteredFavorites: sortedCharacters,
      };

    default:
      return { ...state };
  }
};

export default reducer;