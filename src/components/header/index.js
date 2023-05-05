import React from 'react';
import lalafo from "../../img/lalafo-logo-removebg-preview (1).png"
import {NavLink,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencies} from "../../redux/ActionCreaters/MainActions";

const Header = () => {
    const dispatch = useDispatch()
    const {defaultCurrency} = useSelector(state => state.main)
    const {basket} = useSelector(state => state.basket)
    const optionsValueCurrency ={
        $: "USA",
        SOM: "KGS",
        TENGE: "KZT",
        RUB: "RUB",
        SUM: "UZS",
    }


    return (
        <>
                <header>
                    <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
                        <div className=" flex flex-wrap justify-between w-[1110px]  items-center mx-auto max-w-screen-xl">
                            <NavLink to="/" className="flex items-center">
                                <img src={lalafo} className="w-[45px] h-[40px] rounded-[45%] border-black"
                                     alt="Lalafo Logo"/>
                                <span
                                    className="self-center text-2xl font-bold whitespace-nowrap text-green-500 ml-2" >Lalafo</span>
                            </NavLink>



                            <div className="header-nav flex items-center font-medium lg:space-x-8 lg:mt-0">
                                <select onChange={(e) => dispatch(getCurrencies(e))}
                                        className="bg-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 ">
                                    {
                                        Object.keys(optionsValueCurrency).map(el => (
                                            <option value={el} selected={el === defaultCurrency}>{optionsValueCurrency[el]}</option>
                                        ))
                                    }
                                    {/*<option value="$">USA</option>*/}
                                    {/*<option value="SOM" selected={true}>KGZ</option>*/}
                                    {/*<option value="RUB">RUB</option>*/}
                                    {/*<option value="SUM">UZB</option>*/}
                                    {/*<option value="TENGE">KZT</option>*/}
                                </select>

                                <NavLink to="/"
                                       className="block py-2 pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                       aria-current="page">Home</NavLink>
                                    <NavLink to="/favorites"
                                       className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        Favorites</NavLink>
                                    <NavLink to="/basket"
                                       className="flex    text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 ">
                                        Basket <sup className={"bottom-5"}>{basket.length !== 0 ? basket.length : ""}</sup></NavLink>
                                </div>
                            </div>
                    </nav>
                </header>
        </>
    );
};

export default Header;