import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import {useNavigate} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s => s.basket)
    const navigate = useNavigate()
    return (
        <div className="container">
            <div className=" relative  overflow-x-auto shadow-md sm:rounded-lg">
                {
                    basket.length ? <BasketTable/>
                        :    <button onClick={() => navigate("/")} className="flex items-center justify-center w-[30%] h-16 mx-auto my-20 py-10 bg-green-500 text-xl ">
                                ADD TO PRODUCT</button>

                }

            </div>

        </div>
    );
};

export default Basket;