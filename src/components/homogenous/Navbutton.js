import React, { useState } from 'react'
import { navigate } from 'gatsby'

const NavButton = ({text, subMenu, linkTo }) => {
    const [dropped, setDropped] = useState(false)
    const linkSlug = linkTo || `/${text.replace(" ","").toLowerCase()}`;
    const navClick = (toPage) => {
        setDropped(false);
        navigate(toPage);
    }
    const ArrowIconSub = ({h, w}) => {
        return (
            <svg height={h} width={w} transform={dropped && "rotate(180)"}>
                <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'white',strokeWidth:'1.2'}} />
                <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'white',strokeWidth:'1.2'}}/>
            </svg>
        )
    }
    return (
        <div className="">
            <div onClick={() => setDropped(!dropped)} className="`text-center block  relative w-24 p-2  sm:ml-4  py-2 sm:font-hairline font-extrabold 
            text-xl text-white sm:cursor-pointer  bg-transparent m:hover:scale-105 sm:hover:font-semibold transform duration-75">
                {text} 
                { subMenu && <div className="inline-block pl-2 pt-4"><ArrowIconSub h="8" w="12"/></div>}
            </div>
            {/*creates an invisible overlay that, when clicked, will close the dropdown, takes up entire w and h*/}
            <div onClick={() => setDropped(false)}className={dropped && "fixed top-0 left-0 w-screen h-screen transparent"} />
            
            { (dropped && subMenu) &&
                <div className=" absolute cursor-pointer text-gray-400 w-32 mt-2 py-1 pl-3 bg-black shadow-lg rounded-lg divide-y divide-gray-900">
                    {subMenu.map((text) => (<div  className="py-2" onClick={() => navClick(linkSlug)}>{text}</div>))}
                </div>
            }
        </div>
    )
}

export default NavButton;

