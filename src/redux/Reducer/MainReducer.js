import {
    CHOOSE_THE_CURRENCY,
    GET_PRODUCT
} from "../ActionTypes";

const initialState = {
    products: [],
    currenties:{
        SOM:1,
        $:0.012,
        SUM:132.54,
        TENGE:5.43,
        RUB:0.8,
    },
    defaultCurrency:localStorage.getItem("currenties") || "SOM",

}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {...state, products: action.payload}

        case CHOOSE_THE_CURRENCY:{
            return {...state, defaultCurrency: action.payload}
        }

        default :
            return state
    }
}