import {
    ADD_AND_DELETE_FAVORITE,
    CHOOSE_THE_CURRENCY, DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_BASKET,
    GET_PRODUCT,
} from "../ActionTypes";

export const getProduct = (data) => {
    return  {type:GET_PRODUCT,  payload:data}
}


/** CURRENCIES **/
export const getCurrencies = (e) => {
    let currency = e.target.value
    localStorage.setItem("currenties", currency)
    return ({type:CHOOSE_THE_CURRENCY, payload:e.target.value})
}



