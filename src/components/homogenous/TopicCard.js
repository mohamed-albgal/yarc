import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({tagline, mainText, icon, bgColor="blue-900", size}) => {
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
            <div className={`text-white p-0 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${bgColor}`}  >
                <FontAwesomeIcon icon={icon} size={size}/>
            </div>
            <h6 className="text-xl font-semibold">
                {tagline}
            </h6>
            <p className="mt-2 mb-4 text-gray-600">
                {mainText}
            </p>
            </div>
        </div>
                
    )
}