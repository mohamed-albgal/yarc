import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/img/duo_logo.svg"
import squares from '../../assets/img/Protruding-Squares.svg'

export default () => {
    const [closed, setClosed] = useState("false");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setClosed(!closed);
    }
    const openMenuBg = !closed ? {background: `url(${squares})`} : {};
    return (
        <nav className="  z-50 w-full absolute top-0 sm:flex sm:items-center sm:justify-between bg-transparent">
            <div className="py-3 pl-2 pr-6 flex justify-between  items-center">
                {/*left*/}
                <div className="sm:px-6 flex-shrink-0">
                    <Link to="/">
                        <img className="sm:h-48 h-24"  src={logo} alt="YARC LOGO"/>
                    </Link>
                </div>
                {/*right*/}
                <div>
                    <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-gray-400">
                        <svg viewBox="0 0 100 80" className=" fill-current h-4 lg:h-6">
                            <rect x={70/!closed} width="180" height="9"></rect>
                            <rect x={40/!closed} y="30" width="100" height="9"></rect>
                            <rect x={10/!closed} y="60" width="120" height="9"></rect>
                        </svg>
                    </button>
                </div>
            </div>
            <div style={openMenuBg} className={`${(!closed ? "visible w-screen h-64 pt-10 pb-8 -mt-2 transition-opacity duration-700 text-center":" opacity-0 transition-opacity duration-1000 ")} 
                            sm:px-20 sm:block pt-2 pb-4 sm:flex sm:p-8 sm:items-center sm:justify-between
                            ` }>
                
                <NavElement  text="About" linkTo="/about"/>
                <NavElement  text="Mission" linkTo="/mission"/>
                <NavElement  text="Blog" linkTo="/blog/first-blog"/>
                
            </div>
        </nav>
    )
}

const NavElement = ({linkTo, text}) => {
    return (
        <Link className=" block py-2 hover:underline hover:bg-indigo-200 hover:text-gray-900 font-semibold font-hairline px-4 text-white sm:ml-4" to={linkTo}>
            {text}
        </Link>
    )

}