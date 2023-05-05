import {DECREASE_QUANTITY, DELETE_FROM_BASKET, GET_BASKET} from "../ActionTypes";

export const addToBasket = (products) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    let found = basket.find(el => el.id === products.id)
    if (found){
        basket = basket.map(el => el.id === products.id ? {...el, quantity: el.quantity +1} : el)
    }
    else{
        basket = [...basket, {...products, quantity:1}]
    }
    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:GET_BASKET, payload:products}
}

export const decreaseQuantity = (id) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.map(el => {
        if (el.id === id) {
            if (el.quantity > 1) {
                return {...el, quantity: el.quantity - 1}
            } else return el
        } else return el
    })

    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:DECREASE_QUANTITY, payload:id}
}

export const deleteFromBasket = (id) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.filter(el => el.id !== id)
    localStorage.setItem("basket", JSON.stringify(basket))
    return {type:DELETE_FROM_BASKET, payload:id}
}

