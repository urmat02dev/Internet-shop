import {ADD_AND_DELETE_FAVORITE, ADD_TO_FAVORITE} from "../ActionTypes";

/**FAVORITE**/
export const addToggleFavorites = (products) => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || []
    const found = favorite.find(el => el.id === products.id)
    if (found){
        favorite = favorite.filter(el => el.id !== products.id)
    } else {
        favorite = [...favorite, products]
    }
    localStorage.setItem("favorite", JSON.stringify(favorite))
    return {type:ADD_AND_DELETE_FAVORITE, payload:products}
}

export const likedToFavorites = (products) => {
    let favorite = JSON.parse(localStorage.getItem("favorite")) || []
    const found = favorite.some(el => el.id === products.id)
    if (!found) favorite = favorite.filter(el => el.id !== products.id)
    localStorage.setItem("favorite", JSON.stringify(favorite))
    return {type:ADD_TO_FAVORITE, payload:products}
}
