import React, { useState } from 'react'
import { Link } from 'gatsby'

const NavButton = ({name, subMenu}) => {
    const [dropped, setDropped] = useState(false)
    //const sublinks = [{name: "page 1", to:"/about"}, {name: "page 2", to: "/mission"}]
    const Tri = () =>{
        return(
            <svg height="10" width="10">
                <polygon points="25,35 50,70 0,70" style={{fill:'lime',stroke:'purple',strokeWidth:'1'}} />
            </svg>
        )
    }
    return (
        <div className="">
            <button className="block relative w-20 p-2 rounded-sm bg-red-800">{"name"} </button>
            <div className="inline-block"><Tri /></div>
            { dropped &&
                <div className=" absolute  text-black w-32 mt-2 py-1 pl-3 bg-blue-400 bg-white rounded-b-lg divide-y divide-gray-900">
                    <Link to="/about">
                        <div  className="py-2">
                            {"About Us"}
                        </div>
                        <div  className="py-2 ">
                            {"About Us"}
                        </div>
                        <div  className="py-2  ">
                            {"About Us"}
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default NavButton;

