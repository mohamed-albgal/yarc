
import React, {useState} from 'react'
import { Link } from 'gatsby'
import logo from "../assets/img/duo_logo.svg"

export default () => {
    return (
        <div className="bg-gray-700 h-screen w-screen">
            <div className="flex bg-indigo-900 w-screen">
                <div className="h-24 w-2/5 flex ">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flex justify-end w-3/5 p-5">
                        <div className="inline-block" >About</div>
                        <div className="inline-block" >Blog</div>
                        <div className="inline-block" >Contact</div>
                    </div>
            </div>
            <div className="flex">
                <div className="h-56 w-64 bg-white">
                    <span className="  bg-red-400 w-24 h-24"></span>
                    <span className="  bg-red-900 w-24 h-24"></span>
                    <span className="  bg-red-700 w-24 h-24"></span>
                </div>
            </div>

        </div>  
    )
}

/**
 * flex box 1/2 width on mobile go columns
 *  img
 *  hamburger
 *  flexbox on mobile go columns
 *      links 1-4
 * 
 * 
 */