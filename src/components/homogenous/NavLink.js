import React, { useState } from 'react'
import { navigate, Link } from 'gatsby'

const Navlink = ({text, subMenu, linkTo }) => {
    const [dropped, setDropped] = useState(false)
    
    const linkSlug = linkTo || `/${text.replace(" ","").toLowerCase()}`;
    const navClick = (toPage) => {
        setDropped(false);
        navigate(toPage);
    }
    const ArrowIcon = ({h, w}) => {
        return (
            <svg height={h} width={w} transform={dropped && "rotate(180)"}>
                <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'white',strokeWidth:'1.2'}} />
                <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'white',strokeWidth:'1.2'}}/>
            </svg>
        )
    }
    const navItemStyle = `text-center block  relative lg:w-32 sm:w-24 w-full sm:py-1 sm:hover:bg-gray-600 sm:ml-4  py-2 sm:font-hairline font-extrabold 
    text-xl lg:text-2xl text-white sm:cursor-pointer  bg-transparent sm:hover:scale-105 sm:hover:font-semibold transform duration-75`
    return (
        <div>
            {subMenu ?  (      
                <div className="text-center sm:text-left">
            <div onClick={() => setDropped(!dropped)} className={navItemStyle} >
                {text} 
                <div className="inline-block pl-2 pb-1"><ArrowIcon h="5" w="15"/></div>
            </div>
            {/*creates an invisible overlay that, when clicked, will close the dropdown, takes up entire w and h*/}
            <div onClick={() => setDropped(false)}className={dropped && "sm:fixed sm:top-0 sm:left-0 sm:w-screen sm:h-screen sm:transparent"} />
            
            { dropped &&
                <div className=" sm:absolute sm:cursor-pointer sm:w-48 w-full sm:mt-1 sm:py-2 sm:py-1  sm:rounded-lg rounded-none bg-indigo-900 text-gray-200 sm:divide-y-0 divide-y  divide-black">
                    {subMenu.map((text) => (<div role="menuitem"  className="sm:py-4 py-2 pl-4 sm:hover:bg-indigo-600 " onClick={() => navClick(linkSlug)}>{text}</div>))}
                </div>
            }
        </div> 
        )
        :
            <Link activeStyle={{backgroundColor:'red'}} to={linkSlug}>
                <div className={navItemStyle}>{text}</div>

            </Link>
        }
    </div>
    )
}

export default Navlink


