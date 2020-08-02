import React from 'react'
import { FaBrain } from "react-icons/fa"
import SlantedColorCard from './homogenous/SlantedColorCard'


export default ({ section2 }) => {
    
    const {slantCard, side} = section2;
    return (
        <div className="flex flex-wrap items-center sm:mt-32 mt-20">
            <IndepthTextTopIcon textColorTW={"black"} sideHead={side.head} sideBody={side.body} />
            <SlantedColorCard cardImage={slantCard.image && slantCard.image.publicURL || slantCard.image} head={slantCard.head} body={slantCard.body} bgColorTW="yellow-500" textColorTW="gray-900" />
        </div>
    )
}

const IndepthTextTopIcon = ({textColorTW, sideHead, sideBody}) => {
    return (
        <>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="sm:text-6xl text-5xl mb-2 text-center font-semibold leading-tight">
                    {sideHead}
                </h3>
                <div className="text-center py-4 text-5xl">
                    <div className="text-pink-400 p-3 border border-gray-300 inline-flex text-center shadow-lg rounded-full bg-white">
                        <FaBrain />
                    </div>
                </div>
                <p className={`text-lg font-light text-center leading-relaxed mt-0 mb-4 text-${textColorTW}`}>
                {sideBody}
                </p>
            </div> 
        </>
    )
}