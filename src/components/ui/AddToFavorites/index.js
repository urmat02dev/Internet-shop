import React from 'react';
import {BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {FaTrashAlt} from "react-icons/fa";
import { addToggleFavorites} from "../../../redux/ActionCreaters/FavoriteActions";

const AddToFavoritesBtn = ({products}) => {
    const dispatch =useDispatch()
    const {favorite} = useSelector(state => state.favorite)
    console.log(favorite)
    const foundProduct = true

    return (
        <button onClick={() => dispatch(addToggleFavorites(products))}
                className={` ${foundProduct ? 'text-red-600' :"text-white"}  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            {
                products.isLiked ? <FaTrashAlt className="text-white"/> : <BsFillHeartFill/>
            }
        </button>
    );
};

export default AddToFavoritesBtn;