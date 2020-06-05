import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SlantedColorCard from "./SlantedColorCard"

export default () => {
    return (
        <div className="flex flex-wrap items-center mt-32">
            <IndepthTextTopIcon />
            <SlantedColorCard tailwindColor={"pink-300"} />
        </div>
    )
}

const IndepthTextTopIcon = () => {
    return (
        <>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <FontAwesomeIcon icon={["fa", "brain"]} size={"2x"} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Communities Thrive When Ideas Are Exchanged
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                     FILLER INFORMATION. SOURCE TEXT FROM GOOGLE DOC/MOKHTAR, UPDATE VIA CMS
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is 
                    that it has a more-or-less normal distribution of letters, as opposed to using 
                    'Content here, content here', making it look like readable English. Many desktop 
                    publishing packages and web page editors now use Lorem Ipsum as their default model 
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                    (injected humour and the like).
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                FILLER INFORMATION. SOURCE TEXT FROM GOOGLE DOC/MOKHTAR, UPDATE VIA CMS
                It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English. 
                </p>
            </div> 
        </>
    )
}