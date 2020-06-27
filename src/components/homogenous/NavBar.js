import React, {useState, useEffect} from 'react'
import { Link, navigate } from 'gatsby'
import logo from "../../images/duo_logo.svg"
import NavLink from './NavLink'


const subMenuLinks = [
    {
        name:"Mission & Vision",
        path:"about/mission"
    }, 
    {
        name:"Our Team", 
        path:"about/team"
    },
    {
        name:"Programs We Offer",
        path:"about/programs"
    },
];

const Navbar =  ({withHero, animate}) => {
    const [closed, setClosed] = useState(true);
    const hamburgerClick = (e) => {
        setClosed(!closed);
    }
    const ArrowIcon = ({h, w}) => {
        return (
            <div>{closed ?
                <svg height={h} width={w} className=" fill-current text-white">
                    <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}} />
                    <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}}/>
                </svg>
                :
                <svg height={h} width={w} className=" fill-current text-white">
                    <line x1={0} y1={h} x2={w/2} y2="0" style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}}/>
                    <line x1={w/2} y1="0" x2={w} y2={h} style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}} />
                </svg>}
            </div>
        )
    }
    //styles for showing navbar with or without hero, as well as those needed in both cases
    const wHero = "sm:bg-transparent sm:absolute"
    const noHero = "sm:relative"
    const shared = `fixed sm:pt-4 z-20 top-0 bg-black opacity-100 w-screen sm:shadow-none shadow-xl ${closed && "opacity-75"} sm:opacity-100`
    
    return (
        <div className={`${withHero ? wHero:noHero} ${shared}`}>
            <nav className={`sm:flex w-full  sm:px-10 sm:pb-1  sm:items-center sm:justify-between`}>
                <div className=" pl-2 pr-6 flex justify-between h-auto items-center">
                    {/*left*/}
                    <div className="sm:px-4 sm:flex-shrink-0 pt-1 opacity-100">
                        <Link to="/">
                            <img className={`${animate && "tracking-in-expand-fwd-bottom"} sm:h-48 md:h-40 h-24`}  src={logo} alt="YARC LOGO"/>
                        </Link>
                    </div>
                    {/*right*/}
                    <div className="sm:flex-shrink items-center">
                        <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-white">
                            <ArrowIcon h="18" w="35" colorTW={"black"}/>
                        </button>
                    </div>
                </div>
                <div className={`${!closed ? 'max-h-screen h-70 relative z-0 top-0 transition-height duration-300 ease-linear' : ' h-0 transition-height duration-300 ease-linear sm:h-auto sm:w-auto '} flex`}>
                    <div  className={ `sm:divide-y-0 divide-y divide-gray-900 w-full pt-10 pb-8 -mt-2 
                    sm:px-10  sm:flex sm:p-8 sm:items-center sm:justify-between  ${closed && "h-0 hidden sm:visible"}`}>
                        <NavLink  text="Home" linkTo="/"/>
                        <NavLink  text="About" subMenu={subMenuLinks} />
                        <NavLink  text="Events" linkTo="/events" />
                        <NavLink  text="Youth Voices" linkTo="/blogs"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;