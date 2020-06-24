import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const SlantCard = ({bgColor="bg-teal-400", head, subHead, body, imgFluid, svgTextColor, height="h-64"}) => {
    return (
        <div className="flex flex-col rounded-lg shadow-2xl">
            <Img fluid={imgFluid} className={` sm:max-w-full w-full ${height} rounded-t-lg object-cover object-top overflow-hidden" alt="staff image`}/>
            <div className="relative">
                <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className={`absolute left-0 w-full block ${svgTextColor} fill-current`}
                style={{
                height: "95px",
                top: "-94px"
                }}
                >
                    <path
                    d="M-30 95h613V65z"
                    ></path>
                </svg>
            </div>
            <div className={`${bgColor} text-center p-4 w-full rounded-b-lg leading-10`}>
                <div id="name" className="-mt-3 sm:text-4xl text-3xl">{head}</div>
                <div id="title" className="text-base text-gray-800 pb-2">{subHead}</div>
                <div id="body" className="text-black sm:text-lg leading-6 leading-tight">{body}</div>
            </div>
        </div>
    )
}

export default SlantCard