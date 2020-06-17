import React, { useState } from 'react'
import { navigate } from 'gatsby'

const NavButton = ({name, subMenu}) => {
    const [dropped, setDropped] = useState(false)
    //const sublinks = [{name: "page 1", to:"/about"}, {name: "page 2", to: "/mission"}]
    const ArrowIcon = ({h, w}) => {
        return (
            <svg height={h} width={w} transform={dropped && "rotate(180)"}>
                <line x1="0" y1="0" x2={w/2} y2={h} style={{stroke:'rgb(0,0,0)',strokeWidth:'1.2'}} />
                <line x1={w/2} y1={h} x2={w} y2="0" style={{stroke:'rgb(0,0,0)',strokeWidth:'1.2'}}/>
            </svg>
        )
    }
    const navClick = (toPage) => {
        setDropped(false);
        navigate(toPage);
        
    }
    return (
        <div className="">
            <div onClick={() => setDropped(!dropped)} className=" cursor-pointer block flex relative justify-center align-center w-20 p-2 rounded-sm bg-red-800">{"name"} 
                <div className="block pl-2 pt-4"><ArrowIcon h="8" w="12"/></div>
            </div>
            {/*creates an invisible overlay that, when clicked, will close the dropdown, takes up entire w and h*/}
            <div onClick={() => setDropped(false)}className={dropped && "fixed top-0 left-0 w-screen h-screen bg-black opacity-25 transparent"} />
            
            { dropped &&
                <div className=" absolute cursor-pointer text-black w-32 mt-2 py-1 pl-3 bg-blue-400 bg-white rounded-b-lg divide-y divide-gray-900">
                    <div  className="py-2" onClick={() => navClick("/about")}>
                        {"About Us"}
                    </div>
                    <div  className="py-2 ">
                        {"About Us"}
                    </div>
                    <div  className="py-2  ">
                        {"About Us"}
                    </div>
                </div>
            }
        </div>
    )
}

export default NavButton;

