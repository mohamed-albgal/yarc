import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/img/duo_logo.svg"


export default ({transparent}) => {
    const [closed, setClosed] = useState("true");
    const hamburgerClick = (e) => {
        e.preventDefault();
        setClosed(!closed);
    }
    const openMenuBg = !closed ? svgBG : {};
    //const overlayed = "z-50 absolute top-0 bg-transparent "
    const overlayed = "absolute z-10 top-0 bg-transparent "
    const singlePly = "relative"
    const pos = transparent ?  overlayed:singlePly 
    return (
        <div className={`${transparent && "sm:bg-transparent sm:absolute sm:z-10 sm:top-0"} fixed z-10 border-b-0 shadow-2xl sm:mt-2 bg-indigo-900 shadow-inner w-screen `}>
            <nav className={` w-screen lg:w-11/12 sm:pb-1 sm:flex sm:items-center sm:justify-between`}>
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
                            <svg viewBox="0 0 100 80" className=" fill-current h-4 lg:h-6">
                                <rect x={70/!closed} width="180" height="9"></rect>
                                <rect x={40/!closed} y="30" width="100" height="9"></rect>
                                <rect x={10/!closed} y="60" width="120" height="9"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
                <div style={openMenuBg} className={`${!closed ? 'h-64 relative z-0 top-0 transition-height duration-150 ease-linear' : ' h-0 transition-height duration-100 ease-linear sm:h-auto sm:w-auto '} flex`}>
                    <div  className={ `w-full pt-10 pb-8 -mt-2
                    sm:px-10 sm:block sm:flex sm:p-8 sm:items-center sm:justify-between  ${closed && "hidden sm:visible"}`}>
                        
                        
                        <NavElement  text="About" linkTo="/about" />
                        <NavElement  text="Mission" linkTo="/mission"/>
                        <NavElement  text="Blog" linkTo="/blog/first-blog"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const NavElement = ({linkTo, text, mobileOnly}) => {
    return (
        <Link className={`${mobileOnly && "sm:hidden relative top-0 left-0"} text-center block  py-2 sm:hover:underline sm:hover:bg-indigo-900 hover:text-gray-900 font-semibold text-xl sm:ml-4`} to={linkTo}>
            <div className="border-b-0 shadow-2xl bg-indigo-200 mx-20  rounded-sm p-0 sm:-m-2 sm:px-2 sm:bg-transparent sm:text-gray-200 sm:rounded-none">{text} </div>
        </Link>
    )

}

const svgBG = {
    // backgroundColor: `#141519`,
    backgroundColor: `##9932CC`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%23111111' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%23141414' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%23111111' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%23141414' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%23181818' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%23181818' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%231d1d1d' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23222222' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%231d1d1d' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%23181818' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23222222' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%23181818' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23222222' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%231d1d1d' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23222222' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E")`,
    
    
}