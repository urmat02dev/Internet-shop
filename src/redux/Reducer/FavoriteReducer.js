import {ADD_AND_DELETE_FAVORITE, ADD_TO_FAVORITE} from "../ActionTypes";

const initialState = {
    favorite: JSON.parse(localStorage.getItem("favorite")) || [],
}

export const FavoriteReducer = (state=initialState, action) => {
    switch (action.type){
        case  ADD_AND_DELETE_FAVORITE:{
            const foundProduct = state.favorite.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {...state, favorite: state.favorite.filter(el => el.id !== action.payload.id)}
            } else {
                return {...state, favorite: [...state.favorite, {...action.payload, isLiked: true}]}
            }

        }
        case ADD_TO_FAVORITE: {
            const found = state.favorite.find(el => el.id === action.payload.id)
            if (!found) {
                return {...state, favorite: [...state.favorite, {...action.payload, isLiked: true}]}
            }
            return state

        }
        default:
            return state
    }
}


