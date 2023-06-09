import {DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_BASKET} from "../ActionTypes";


const initialState = {
    basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const BasketReducer = (state=initialState, action ) => {
    switch (action.type){
        case GET_BASKET :
            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {...state, basket: state.basket.map(el => el.id === foundProduct.id ? {...el, quantity: el.quantity + 1} : el)
                }
            } else {
                return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
            }
        case DECREASE_QUANTITY:
            return {
                ...state, basket: state.basket.map(el => {
                    if (el.id === action.payload) {
                        if (el.quantity > 1) {
                            return {...el, quantity: el.quantity - 1}
                        } else return el
                    } else return el
                })
            }
        case DELETE_FROM_BASKET: {
            return {...state, basket: state.basket.filter((el) => el.id !== action.payload)}
        }
        default:
            return state
    }
}
