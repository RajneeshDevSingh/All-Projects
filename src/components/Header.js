import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>
{
    return(
        <div className="flex justify-between px-10 py-3  bg-zinc-500 shadow-sm">
            <div className="logo-container">
                <img className="w-24 rounded-lg" src="https://t3.ftcdn.net/jpg/01/10/15/24/240_F_110152426_L5NOFHFAug9uH4jCKVQZ36mdq043i99t.jpg"/>
            </div>

            <div className="flex mt-3 font-sans text-2xl font-bold ">
                <ul className="flex justify-around gap-x-8">
                    <li className="text-slate-800 hover:text-white"><Link to="/">Home</Link></li>
                    <li className="text-slate-800 hover:text-white"><Link to="/about">About</Link></li>
                    <li className="text-slate-800 hover:text-white"><Link to="/contact">Contact</Link></li>
                    <li className="text-slate-800 hover:text-white">Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;