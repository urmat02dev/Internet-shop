import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "./Reducer/BasketReducer";
import {FavoriteReducer} from "./Reducer/FavoriteReducer";
import {MainReducer} from "./Reducer/MainReducer";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorite:  FavoriteReducer,
}), composeWithDevTools())
