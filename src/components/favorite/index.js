import React from 'react';
import ProductCard from "../pages/productCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const favorite = useSelector(state => state.favorite.favorite)
    return (
        <div className="container">
            <div className='flex flex-wrap mt-10 ml-10'>
                {
                    favorite.map(el => (
                        <ProductCard products={el}/>
                    ))
                }
            </div>

        </div>
    );
};

export default Favorites;
