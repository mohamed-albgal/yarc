
import React, { useState } from 'react'
import { navigate, Link } from 'gatsby'

const Navlink = ({text, subMenu, linkTo }) => {
    const [dropped, setDropped] = useState(false)
    const navClick = (toPage) => {
        setDropped(false);
        navigate(toPage);
    }
    
    const ArrowIcon = ({h, w}) => {
        return (
            <div>{!dropped ?
                <svg height={h} width={w} className=" fill-current text-white">
                    <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}} />
                    <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}}/>
                </svg>
                :
                <svg height={h} width={w} className=" fill-current">
                    <line x1={0} y1={h} x2={w/2} y2="0" style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}}/>
                    <line x1={w/2} y1="0" x2={w} y2={h} style={{stroke:'rgb(255,255,255)',strokeWidth:'2'}} />
                </svg>}
            </div>
        )
    }

    const navItemStyle = `text-center sm:block uppercase  relative sm:px-2 sm:py-1 sm:hover:text-yellow-500 rounded lg:ml-4  py-2 sm:font-hairline font-extrabold 
    text-xl lg:text-2xl text-white cursor-pointer  bg-transparent  transform duration-75`
    return (
        <div>
            {subMenu ?  (      
            <div className="text-center">
                {/**Any item with a submenu gets styled as any link but receives the arrow and the mechanism that allows clicking out of the submenu */}
                <button onClick={() => setDropped(!dropped)} className="sm:inline-flex sm:flex-row sm:flex-no-wrap sm:align-text-bottom">
                    <div className={`${navItemStyle} inline-block`} >
                        {text} 
                        
                    </div>
                    <div className="inline-block content-center lg:pt-5 sm:pt-4 "><ArrowIcon h="7" w="15"/></div>
                </button>
                {/*creates an invisible overlay that, when clicked, will close the dropdown, takes up entire w and h */}
                <div onClick={() => setDropped(false)}className={dropped && "sm:fixed sm:top-0 font- sm:left-0 sm:w-screen sm:h-screen sm:transparent sm:shadow-2xl"} />
            
            { dropped &&
                <div className=" sm:absolute sm:cursor-pointer sm:w-48 w-full sm:mt-1 sm:py-2  
                sm:rounded-lg rounded-none 
                text-black sm:divide-y-0
                 flex flex-col bg-gradient-blue-bottom
                "
                >
                    {subMenu.map((elt) => (<div role="menuitem"  className="sm:py-4 py-2 font-medium text-tiny text-blue-900 uppercase sm:hover:shadow-lg sm:hover:bg-yellow-500 shadow-inner " onClick={() => navClick(elt.path)}>{elt.name}</div>))}
                </div>
            }
        </div> 
        )
        :
            <Link to={linkTo}>
                <div className={navItemStyle}>{text}</div>
            </Link>
        }
    </div>
    )
}

export default Navlink


