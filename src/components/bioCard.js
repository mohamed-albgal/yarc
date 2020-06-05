import React from 'react'

export default({imgSrc}) =>{
    return(
        <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
                <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" 
                    src={imgSrc} alt="..."  />
            </div>
        </div>
    )
}