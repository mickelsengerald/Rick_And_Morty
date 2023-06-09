import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // conectar la app con la extension del navegador

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // para hacer peticiones a una api o servidor
)