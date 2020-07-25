
import React, { useState } from 'react'
import { Link } from 'gatsby-plugin-intl'

const Navlink = ({text, subMenu, linkTo, linkState, setNavUp }) => {
    const [dropped, setDropped] = useState(false)
    const droppedDivStyle = `flex flex-col sm:absolute sm:mt-10 sm:cursor-pointer w-full max-h-screen sm:w-auto sm:py-2  
    sm:rounded-tl-none sm:rounded-lg rounded-none text-black
    jigsaw-bg
`
    const navItemStyle = `text-center sm:block uppercase flex flex-col justify-center  relative  sm:py-1 sm:hover:text-yellow-500 rounded mx-4  py-2 sm:font-bold font-extrabold 
    text-xl lg:text-2xl  sm:text-blue-900 text-white sm:h-auto h-16 bg-transparent transform duration-75`
    return (
        <div onMouseLeave={() => setDropped(false)}>
            {subMenu ?  (      
            <div className="text-center" onMouseEnter={() => setDropped(true)} >
                {/**Any item with a submenu gets styled as any link but receives the arrow and the mechanism that allows clicking out of the submenu */}
                <button onClick={() => setDropped(!dropped)}  className="sm:inline-flex sm:flex-row sm:flex-no-wrap sm:align-text-bottom">
                    <div className={`${navItemStyle} inline-block`} >
                        {text} 
                    </div>
                    { dropped && <div  className={droppedDivStyle} style={{opacity:"95%",}}>
                    {subMenu.map((elt) => (<Link onClick={() => setNavUp(true)} to={elt.path} state={elt.state}>
                        <div role="menuitem"  className="sm:py-4 font-semibold sm:px-6 tracking-wider text-base text-gray-300 sm:hover:text-yellow-500 sm:w-full w-screen sm:h-auto h-16 flex flex-col justify-center shadow-inner " 
                        > {elt.name} </div>
                        </Link>))}
                    </div>}
                </button>
                </div> )
            :
            <Link to={linkTo} state={linkState}>
                <div className={navItemStyle}>{text}</div>
            </Link>
            }
        </div>
    )
}

export default Navlink


