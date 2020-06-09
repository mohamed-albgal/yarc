import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/img/duo_logo.svg"

export default () => {
    const [open, setOpen] = useState("false");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    return (
        <nav className="  z-50 w-full absolute top-0 sm:flex sm:items-center sm:justify-between bg-transparent">
            <div className="py-3 pl-2 pr-6 flex justify-between space-x-1items-center">
                {/*left*/}
                <div className="sm:px-6">
                    <Link to="/">
                        <img className="sm:h-48 h-24"  src={logo} alt="YARC LOGO"/>
                    </Link>
                </div>
                {/*right*/}
                <>
                    <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-gray-400">
                        <svg viewBox="0 0 100 80" className=" fill-current h-4 lg:h-6">
                            <rect x={70/!open} width="180" height="9"></rect>
                            <rect x={40/!open} y="30" width="100" height="9"></rect>
                            <rect x={10/!open} y="60" width="120" height="9"></rect>
                        </svg>
                    </button>
                </>
            </div>
            <div className={`${(!open ? "visible bg-indigo-900 opacity-75 h-64":"hidden")} sm:px-20 sm:block pt-2 pb-4 sm:flex sm:p-8 sm:items-center sm:justify-between`} >
                <NavElement  text="About" linkTo="/about"/>
                <NavElement  text="Mission" linkTo="/mission"/>
                <NavElement  text="Blog" linkTo="/"/>
                <NavElement  text="About" linkTo="/"/>
                <NavElement  text="About" linkTo="/"/>
                <NavElement  text="About" linkTo="/"/>
            </div>
        </nav>
    )
}

const NavElement = ({linkTo, text}) => {
    return (
        <Link className=" block  py-1 hover:underline hover:bg-indigo-200 hover:text-gray-900 hover:font-semibold font-hairline px-4 text-white sm:ml-4" to={linkTo}>
            {text}
        </Link>
    )

}