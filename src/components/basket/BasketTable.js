import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {

    const {basket} = useSelector(s => s.basket)
    const {currenties,defaultCurrency} = useSelector(state => state.main)
    const totalPrice = basket.reduce((acc, el) => {
        return acc + el.price * el.quantity
    },0) * currenties[defaultCurrency]
    console.log(basket.reduce((acc,el) => {
        return acc + el.price * el.quantity
    },0) * currenties[defaultCurrency])
    return (
    <>
        <table className="w-full my-3 bg-green-500 text-sm text-left text-gray-500 dark:text-gray-400" >
            <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    image
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Price <span className="text-green-500">({defaultCurrency})</span>
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
            </tr>
            </thead>
            <tbody>
            {
                basket.map(el => <BasketRow el={el}/>)
            }
            </tbody>
        </table>
        <div className="text-xl my-4 mx-4 border-0 font-mono">Total: {Math.floor(totalPrice)} {defaultCurrency}</div>
    </>

    );
};

export default BasketTable;