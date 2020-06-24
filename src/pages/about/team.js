import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/homogenous/Hero'
import heroImage from '../../images/open-space.jpg'
import image1 from '../../images/mokhtar.jpg'
import image2 from '../../images/default-profile.png'
import image3 from '../../images/flyer1.jpg'
import image4 from '../../images/headshot4.jpg'
import image5 from '../../images/hs_writing_ws.jpg'
import SlantCard from '../../components/homogenous/SlantCard'


const heroText= "The YAR Center Team"

const card1 = {
    image: image1,
    fullName: "Person 1",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card2 = {
    image: image2,
    fullName: "Person 2",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card3 = {
    image: image3,
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card4 = {
    image: image4,
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card5 = {
    image: image5,
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}

export default () => {
    return (
        <Layout navWithHero bgGradientColor="bg-gradient-blue-bottom">
            <Hero mainText={heroText} heroImage={heroImage} />
            <div className="flex flex-wrap mt-10 z-10 relative">
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full h-full">
                    <SlantCard body={card1.body} svgTextColor={"text-teal-400"}  head={card1.fullName} img={card1.image} subHead={card1.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card2.body} svgTextColor={"text-teal-400"}  head={card2.fullName} img={card2.image} subHead={card2.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card3.body} svgTextColor={"text-teal-400"}  head={card3.fullName} img={card3.image} subHead={card3.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card4.body} svgTextColor={"text-teal-400"}  head={card4.fullName} img={card4.image} subHead={card4.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card5.body} svgTextColor={"text-teal-400"}  head={card5.fullName} img={card5.image} subHead={card5.title} bgColor={"bg-teal-400"} />
                </div>
            </div>
        </Layout>
    )
}