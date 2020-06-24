import React from 'react'

import Layout from '../../components/Layout'
import Hero from '../../components/homogenous/Hero'
import heroImage from '../../images/open-space.jpg'
import image1 from '../../images/mokhtar.jpg'
const heroText= "The YAR Center Team"

const card1 = {
    image: image1,
    fullName: "Person 1",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}


const SlantCard = ({bgColor="bg-teal-400", head, subHead, body, img, svgTextColor}) => {
    return (
        <div className="flex flex-col  rounded-lg shadow-xl">
            <img src={img} className=" rounded-t-lg object-cover" alt="staff image"/>
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
export default () => {
    return (
        <Layout navWithHero bgGradientColor="bg-gradient-blue-bottom">
            <Hero mainText={heroText} heroImage={heroImage} />
            <div className="flex flex-wrap mt-10 z-10 relative">
                <div className="px-4 pb-4 sm:w-1/3 flex-shrink">
                    <SlantCard body={card1.body} svgTextColor={"text-teal-400"}  head={card1.fullName} img={card1.image} subHead={card1.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="px-4 pb-4 sm:w-1/3 flex-shrink">
                    <SlantCard body={card1.body} svgTextColor={"text-teal-400"}  head={card1.fullName} img={card1.image} subHead={card1.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="px-4 pb-4 sm:w-1/3 flex-shrink">
                    <SlantCard body={card1.body} svgTextColor={"text-teal-400"}  head={card1.fullName} img={card1.image} subHead={card1.title} bgColor={"bg-teal-400"} />
                </div>
                
                
                
            </div>
        </Layout>
    )
}