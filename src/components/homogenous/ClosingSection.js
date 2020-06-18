import React from 'react'
import { FcLike } from 'react-icons/fc'
import { GoLightBulb } from 'react-icons/go'
import { GoRocket } from 'react-icons/go'
export default () => {
    return (

        <div className="pb-20 relative block jigsaw-bg bg-fixed" >
                
                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white">
                                We're All We Got!
                            </h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                Put the potentially record low maximum sea ice extent tihs year down to low ice.
                                According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                            </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blue-900 text-4xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <GoRocket />
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Mentorship
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-red-900 text-5xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FcLike />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Networking
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i className="fas fa-lightbulb text-xl"></i>
                                    <GoLightBulb />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Youth Enrichment
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}