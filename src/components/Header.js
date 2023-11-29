import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Header = ()=>
{
    const {loggedInuser} = useContext(UserContext);
    return(
        <div className="flex justify-between px-10 py-3 bg-neutral-500 shadow-sm">
            <div className="logo-container">
                <img className="w-24 rounded-lg" src="https://t3.ftcdn.net/jpg/01/10/15/24/240_F_110152426_L5NOFHFAug9uH4jCKVQZ36mdq043i99t.jpg"/>
            </div>









            <div className="flex mt-3 font-sans text-2xl font-bold ">
                <ul className="flex justify-around gap-x-8">
                    <li className="hover:text-slate-800 text-white"><Link to="/">Home</Link></li>
                    <li className="hover:text-slate-800 text-white"><Link to="/about">About</Link></li>
                    <li className="hover:text-slate-800 text-white"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-slate-800 text-white">Cart</li>
                    <li className="hover:text-slate-800 text-white">{loggedInuser}</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;