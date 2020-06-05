import React, { useState} from 'react'
import { Link } from 'gatsby'
import logo from "../assets/img/duo_logo.svg"

export default () => {

    const [open, setOpen] = useState("false");
    const buc = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    return (
        <nav className="  z-50 w-full absolute top-0 sm:flex sm:items-center sm:justify-between bg-transparent">
            <div className="py-3 pl-2 pr-6 flex justify-between space-x-1items-center">
    {/*left*/}
                <div className="">
                    <Link to="/">
                        <img className="sm:h-48 h-24"  src={logo} alt="YARC LOGO"/>
                    </Link>
                </div>
    {/*right*/}
                <>
                    <button onClick={e=> buc(e)} type="button" className="sm:hidden block text-gray-400">
                        <svg viewBox="0 0 100 80" className=" fill-current h-4 lg:h-6">
                            <rect rx="10" x={70/!open} width="180" height="9"></rect>
                            <rect rx="10" x={40/!open} y="30" width="100" height="9"></rect>
                            <rect rx="10" x={10/!open} y="60" width="120" height="9"></rect>
                        </svg>
                    </button>
                </>
            </div>
            <div className={`${(!open ? "visible":"hidden")} sm:block pt-2 pb-4 sm:flex sm:p-8 `} >
                <Link className=" block py-1 hover:bg-gray-800 font-hairline px-4 text-white sm:ml-4" to="/about">
                    About
                </Link>
                <Link className=" block py-1 hover:bg-gray-800 font-hairline px-4 text-white sm:ml-4" to="/mission">
                    Mission
                </Link>
                <Link className=" block py-1 hover:bg-gray-800 font-hairline px-4 text-white sm:ml-4" to="/blog">
                    Blog
                </Link>
            </div>
        </nav>
    )
};