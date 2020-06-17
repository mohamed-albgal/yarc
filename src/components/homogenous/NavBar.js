import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/logo/duo_logo.svg"
import NavButton from './Navbutton'


export default ({withHero, animate}) => {
    const [closed, setClosed] = useState("true");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setClosed(!closed);
    }

    //styles for showing navbar with or without hero, as well as those needed regardless
    const wHero = "sm:bg-transparent sm:absolute"
    const noHero = "sm:relative"
    const shared = "fixed sm:pt-4 z-20 top-0 bg-black w-screen sm:shadow-none shadow-xl opacity-75 sm:opacity-100"

    const ArrowIcon = ({h, w}) => {
        return (
            <svg height={h} width={w} transform={!closed && "rotate(180)"} className=" fill-current text-white transition-transform duration-700">
                <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'rgb(255,255,255)',strokeWidth:'2', transitionDuration:'0.5'}} />
                <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}}/>
            </svg>
        )
    }
    
    return (
        <div className={`${withHero ? wHero:noHero} ${shared}`}>
            <nav className={`sm:flex w-full  sm:px-10 sm:pb-1  sm:items-center sm:justify-between`}>
                <div className=" pl-2 pr-6 flex justify-between  items-center">
                    {/*left*/}
                    <div className="sm:px-4 flex-shrink opacity-100">
                        <Link to="/">
                            <img className={`${animate && "tracking-in-expand-fwd-bottom"} sm:h-48 md:h-40 h-24`}  src={logo} alt="YARC LOGO"/>
                        </Link>
                    </div>
                    {/*right*/}
                    <div>
                        <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-white">
                            <ArrowIcon h="18" w="35" colorTW={"black"}/>
                        </button>
                    </div>
                </div>
                <div className={`${!closed ? 'h-64 relative z-0 top-0 transition-height duration-150 ease-linear' : ' h-0 transition-height duration-100 ease-linear sm:h-auto sm:w-auto '} flex`}>
                    <div  className={ `sm:divide-y-0 divide-y divide-gray-800 w-full pt-10 pb-8 -mt-2 
                    sm:px-10 sm:block sm:flex sm:p-8 sm:items-center sm:justify-between  ${closed && "hidden sm:visible"}`}>
                        <NavElement  text="About" linkTo="/about" />
                        <NavElement  text="Mission" linkTo="/mission"/>
                        <NavElement  text="Events" linkTo="/events"/>
                        <NavElement  text="Blog" linkTo="/blogs"/>
                        <NavButton />
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

const NavElement = ({linkTo, text, mobileOnly}) => {
    return (
        <Link className={`text-center sm:ml-4 block  py-2  sm:hover:scale-105 sm:hover:font-semibold transform duration-75 relative hover:text-indigo-900 sm:font-hairline font-extrabold text-xl `} to={linkTo}>
            <div className=" shadow-2xl  mx-32 sm:-m-2 sm:px-4 lg:px-8 sm:bg-transparent text-gray-200 sm:rounded-none">
                {text} 
            </div>
            

        </Link>
    )

}

// const BurgerIcon = () => {
//     return (
//         <svg viewBox="0 0 100 80" className=" fill-current h-5 w-12 lg:h-6">
//             <rect x={`30 * ${!closed}`}  y='0' width="180" height="4"  transform ={ !closed &&`rotate(-45 100 100)`}></rect>
//             <rect x={`30 * ${!closed}`} y="30" width="180" height="4"  transform = {  !closed &&`rotate(90 100 100)`}></rect>
//             <rect x={`30 * ${!closed}`} y="60" width="180" height="4"  transform = { !closed && `rotate(48 100 100)`}></rect>
//         </svg>
        
//     )
// }

// const ArrowIcon = () => {
//     return (
//         <svg height="50" width="90" transform={!closed && "rotate(180, 25, 45)"} className="fill-current h-5 w-12 lg:h-6">
//             <line x1="0" y1="0" x2="45" y2="50" style={{stroke:'rgb(255,0,0)',strokeWidth:'2'}} />
//             <line x1="45" y1="50" x2="90" y2="0" style={{stroke:'rgb(255,0,0)',strokeWidth:'2'}}/>
//         </svg>
//     )
// }



/**
 * 
 * 
 * 
 
 * test events page with different images by manually adding
 * add fb images
 
 * icons
    use react-icons instead of fontaweseom, create a new branch!
 * make markdowns link to their images in the assets dir
 * fix image loading
 * 
 * add site text to a markdown file so that all content is not embedded in components
 *  
 * * link form to something
 *      done on netlify, wrap action form in form tag and thats it
 * fix homepage content/ aestheticl logic, tie in somehow
 *  fix overall ui look
 * add fluff
 * add a 404 page?
 
 
 */