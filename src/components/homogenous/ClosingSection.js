import React from 'react'
import { FcLike } from 'react-icons/fc'
import { GoLightBulb } from 'react-icons/go'
import { GoRocket } from 'react-icons/go'
export default ({card1, card2, card3, head}) => {
    return (

        <div className="pb-20 relative block jigsaw-bg bg-fixed" >       
            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pt-20">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-5xl font-semibold text-white">
                        {head}
                    </h2>
                    </div>
                </div>
                <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-blue-900 text-4xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <GoRocket />
                        </div>
                        <h6 className="text-xl mt-5 font-semibold text-white">
                            {card1.head}
                        </h6>
                        <p className="mt-4 mb-4 text-gray-500">
                            {card1.body}
                        </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-red-900 text-5xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <FcLike />
                            </div>
                            <h6 className="text-xl mt-5 font-semibold text-white">
                                {card2.head}
                            </h6>
                            <p className="mt-4 mb-4 text-gray-500">
                                {card2.body}
                            </p>
                        </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                        <div className="text-gray-900 p-3 w-12 h-12 text-2xl text-center shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                            <GoLightBulb />
                        </div>
                        <h6 className="text-xl mt-5 font-semibold text-white">
                            {card3.head}
                        </h6>
                        <p className="mt-4 mb-4 text-gray-500">
                            {card3.body}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}