import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const SlantCard = ({bgColor="bg-teal-400", head, subHead, body, imgFluid, svgTextColor, tagTextColor="bg-gray-200", tagBgColor="bg-teal-400", height="h-64", tags}) => {
    const tagStyles =`inline-block px-2 mx-1 mt-1 rounded-lg text-center ${tagBgColor} ${tagTextColor} opacity-75 `
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
                <div id="title" className="text-tiny text-gray-800 pb-2">{subHead}</div>
                <div id="body" className="text-black sm:text-xl leading-tight">{body}</div>
            </div>
            {tags && <div className={`text-right text-xs p-2 ${bgColor}`}>
                {tags.map((tag, i) => <div key={i} className={tagStyles}>{tag}</div>)}
            </div>}
        </div>
    )
}

export default SlantCard