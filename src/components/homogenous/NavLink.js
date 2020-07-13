
import React, { useState } from 'react'
import { navigate, Link } from 'gatsby'

const Navlink = ({text, subMenu, linkTo, linkState }) => {
    const [dropped, setDropped] = useState(false)
    const navClick = (toPage) => {
        setDropped(false);
        navigate(toPage);
    }
    
    const droppedDivStyle = `flex flex-col sm:absolute sm:cursor-pointer w-full sm:w-auto sm:py-2  
    sm:rounded-t-sm sm:rounded-b-lg rounded-none text-black 
    jigsaw-bg
`
    const navItemStyle = `text-center sm:block uppercase flex flex-col justify-center  relative sm:px-2 sm:py-1 sm:hover:text-yellow-500 rounded lg:ml-4  py-2 sm:font-hairline font-extrabold 
    text-xl lg:text-2xl text-white sm:h-auto h-16 bg-transparent transform duration-75`
    return (
        <div onMouseLeave={() => setDropped(false)}>
            {subMenu ?  (      
            <div className="text-center" onMouseEnter={() => setDropped(true)} >
                {/**Any item with a submenu gets styled as any link but receives the arrow and the mechanism that allows clicking out of the submenu */}
                <button onClick={() => setDropped(!dropped)}  className="sm:inline-flex sm:flex-row sm:flex-no-wrap sm:align-text-bottom">
                    <div className={`${navItemStyle} inline-block`} >
                        {text} 
                    </div>
                </button>
                {/*creates an invisible overlay that, when clicked, will close the dropdown, takes up entire w and h */}
                
                
            
            { dropped &&
                <div  className={droppedDivStyle}
                >
                    {subMenu.map((elt) => (<div role="menuitem"  className="sm:py-4 font-semibold sm:px-6 tracking-wider text-base text-gray-300 sm:hover:text-yellow-500 sm:h-auto h-16 flex flex-col justify-center shadow-inner " onClick={() => navClick(elt.path)}>{elt.name}</div>))}
                </div>
            }
        </div> 
        )
        :
            <Link to={linkTo} state={linkState}>
                <div className={navItemStyle}>{text}</div>
            </Link>
        }
    </div>
    )
}

export default Navlink


