import React from 'react'

export default ({tagline, mainText, iconComponent, iconColor="blue-900"}) => {
    return (
        <div className="tracking-in-expand-fwd-bottom relative flex flex-col break-words bg-white mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
                <div className={`text-5xl p-1 text-center inline-flex items-center justify-center  mb-5 shadow-lg rounded-full text-${iconColor}`}  >
                    {iconComponent && React.createElement(iconComponent, {})}
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