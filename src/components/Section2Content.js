import React from 'react'
import { FaBrain } from "react-icons/fa"
import SlantedColorCard from './homogenous/SlantedColorCard'


export default ({slantedCardImage, cardHeadText, cardBodyText, sideHead ,sideBody}) => {
    return (
        <div className="flex flex-wrap items-center sm:mt-32 mt-20">
            <IndepthTextTopIcon textColorTW={"black"} sideHead={sideHead} sideBody={sideBody} />
            <SlantedColorCard cardImage={slantedCardImage} head={cardHeadText} body={cardBodyText} bgColorTW={"teal-700"} textColorTW={"gray-300"} />
        </div>
    )
}

const IndepthTextTopIcon = ({textColorTW, sideHead, sideBody}) => {
    return (
        <>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    {sideHead}
                </h3>
                <div className="text-center pb-2 text-5xl">
                    <div className="text-pink-400 p-3 border border-gray-300 inline-flex text-center shadow-lg rounded-full bg-white">
                        <FaBrain />
                    </div>
                </div>
                <p className={`text-lg font-light leading-relaxed mt-0 mb-4 text-${textColorTW}`}>
                {sideBody}
                </p>
            </div> 
        </>
    )
}