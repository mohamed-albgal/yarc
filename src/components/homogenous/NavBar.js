import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/img/duo_logo.svg"


export default ({withHero}) => {
    const [closed, setClosed] = useState("true");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setClosed(!closed);
    }

    const wHero = "sm:bg-transparent sm:absolute"
    const noHero = "sm:relative"
    const shared = "fixed sm:pt-4 z-20 top-0 bg-black w-screen sm:shadow-none shadow-xl"
    
    return (
        <div className={`${withHero ? wHero:noHero} ${shared}`} style={{opacity:'85%'}}>
            <nav className={`sm:flex w-full  sm:px-10 sm:pb-1  sm:items-center sm:justify-between`}>
                <div className=" pl-2 pr-6 flex justify-between  items-center">
                    {/*left*/}
                    <div className="sm:px-4 flex-shrink">
                        <Link to="/">
                            <img className="sm:h-48 md:h-40 h-24"  src={logo} alt="YARC LOGO"/>
                        </Link>
                    </div>
                    {/*right*/}
                    <div>
                        <button onClick={e=> hamburgerClick(e)} type="button" className="sm:hidden block text-white">
                            <svg viewBox="0 0 100 80" className=" fill-current h-5 w-12 lg:h-6">
                                <rect x={90/!closed} width="180" height="2"></rect>
                                <rect x={50/!closed} y="30" width="180" height="2"></rect>
                                <rect x={20/!closed} y="60" width="180" height="2"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${!closed ? 'h-64 relative z-0 top-0 transition-height duration-150 ease-linear' : ' h-0 transition-height duration-100 ease-linear sm:h-auto sm:w-auto '} flex`}>
                    <div  className={ `w-full pt-10 pb-8 -mt-2 
                    sm:px-10 sm:block sm:flex sm:p-8 sm:items-center sm:justify-between  ${closed && "hidden sm:visible"}`}>
                        <NavElement  text="About" linkTo="/about" />
                        <NavElement  text="Mission" linkTo="/mission"/>
                        <NavElement  text="Events" linkTo="/events"/>
                        <NavElement  text="Blog" linkTo="/blogs"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const NavElement = ({linkTo, text, mobileOnly}) => {
    return (
        <Link className={`${mobileOnly && "sm:hidden relative top-0 left-0"} text-center block  py-2 sm:hover:underline sm:hover:bg-indigo-900 hover:text-gray-900 font-semibold text-xl sm:ml-4`} to={linkTo}>
            <div className="border-b-0 shadow-2xl bg-indigo-200 mx-32  rounded-sm p-0 sm:-m-2 sm:px-2 sm:bg-transparent sm:text-gray-200 sm:rounded-none">{text} </div>
        </Link>
    )

}


/**
 * 
 * 
 * 
 
 * test events page with different images by manually adding
 * 
 * fix spacing on blog content, events page
 *  fix links, transparent vs not issue
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