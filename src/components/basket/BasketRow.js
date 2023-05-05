import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BsTrash} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, decreaseQuantity, deleteFromBasket} from "../../redux/ActionCreaters/BasketActions";

const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const {currenties,defaultCurrency} = useSelector(state => state.main)

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 text-xl py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={49} alt=""/>
            </td>
            <td className="px-6 mt-5 mx-3  text-[20px] py-4 flex items-center ">
                <span onClick={() => dispatch(decreaseQuantity(el.id))}
                    className={`${el.quantity > 1 ? "text-blue-600" : ""} mx-2 cursor-pointer`}>
                    <AiOutlineMinus/>
                </span>
                 {el.quantity}
                <span onClick={() => dispatch(addToBasket(el))} className={`text-blue-600  mx-2 cursor-pointer`}>
                    <AiOutlinePlus/>
                </span>
            </td>
            <td className="px-6 text-[20px] py-4">
                <p className="text-red-500">{Math.floor((el.price * el.quantity) *currenties[defaultCurrency])}</p>
            </td>
            <td className="px-6 py-4 text-right text-[20px]">
                <BsTrash className="cursor-pointer" onClick={() => dispatch(deleteFromBasket(el.id))}/>
            </td>
        </tr>
    );
};

export default BasketRow;