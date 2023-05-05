import React, {useState} from 'react';
import {BsBasketFill, BsFillHeartFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import AddToFavoritesBtn from "../../ui/AddToFavorites";
import {likedToFavorites} from "../../../redux/ActionCreaters/FavoriteActions";
import {addToBasket} from "../../../redux/ActionCreaters/BasketActions";


const ProductCard = ({products}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)
    const {basket} = useSelector(state => state.basket)
    const {defaultCurrency,currenties} =useSelector(s=> s.main)
        const foundProduct = basket.some(el=> el.id === products.id)
    const doubleClickFn = () => {
        dispatch(likedToFavorites(products))
        if (!products.isLiked){
            setIsLiked(true)
            setTimeout(()=> setIsLiked(false),1000)
    }
        }

    return (
        <div
            className="max-w-sm bg-gray-300 w-[20%] my-3 mx-4 order border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">

                <img onDoubleClick={() => doubleClickFn()} className="rounded-t-lg" src={products.image} alt=""/>
                 <BsFillHeartFill className={`absolute  transition-[.3s] top-[50%] left-[50%] text-red-600 text-4xl rotate-[-12deg] transition-[.3s]  ${ isLiked ? "scale-100" : "scale-0"}`}  />

            </div>


            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-3 text-[19px] font-bold tracking-tight text-gray-900 dark:text-white ">
                        {products.title}
                    </h5>
                </a>
                <p className="mb-3 p-2 font-normal text-gray-700 dark:text-gray-400">
                    {products.description}
                </p>
                <h2 className="font-bold text-red-600">{products.price * currenties[defaultCurrency]} {defaultCurrency}</h2>
                <div className="mt-4 ">
                    <div className="flex items-center justify-center">
                        <AddToFavoritesBtn products={products} />
                        {
                            foundProduct ?
                        <button
                            onClick={() => navigate("/basket")}
                            className="flex  text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
                            Перейти в <BsBasketFill className="pl-2 py-1 text-[22px]"/>
                        </button>
                            :
                        <button
                            onClick={() => dispatch(addToBasket(products))}
                                className="flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
                            Добавить в <BsBasketFill className="pl-2 py-1 text-[22px]"/>
                        </button>
                        }
                    </div>


                </div>

            </div>
        </div>


    );
};

export default ProductCard;