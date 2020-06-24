import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Hero from '../../components/homogenous/Hero'
import heroImage from '../../images/open-space.jpg'
import SlantCard from '../../components/homogenous/SlantCard'

export const query =graphql`
{
    image1: file(relativePath: {eq: "images/mokhtar.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image2: file(relativePath: {eq: "images/default-profile.png"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image3: file(relativePath: {eq: "images/flyer1.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image4: file(relativePath: {eq: "images/headshot4.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
    image5: file(relativePath: {eq: "images/hs_writing_ws.jpg"}) {
        childImageSharp {
            fluid (maxWidth:400 maxHeight:250){
                ...GatsbyImageSharpFluid
            }
        }
    }
}`

const heroText= "The YAR Center Team"

const card1 = {
    
    fullName: "Person 1",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card2 = {
    
    fullName: "Person 2",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card3 = {
    
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card4 = {
    
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}
const card5 = {
    
    fullName: "Person ",
    title: "Director",
    body: "description of this person's history",
    cardBgColor: "bg-teal-400"
}

export default ({data}) => {
    const {image1, image2, image3, image4, image5} = data;
    return (
        <Layout navWithHero bgGradientColor="bg-gradient-blue-bottom">
            <Hero mainText={heroText} heroImage={heroImage} />
            <div className="flex flex-wrap mt-10 z-10 relative">
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full h-full">
                    <SlantCard body={card1.body} svgTextColor={"text-teal-400"}  head={card1.fullName} imgFluid={image1.childImageSharp.fluid} subHead={card1.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card2.body} svgTextColor={"text-teal-400"}  head={card2.fullName} imgFluid={image2.childImageSharp.fluid} subHead={card2.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card3.body} svgTextColor={"text-teal-400"}  head={card3.fullName} imgFluid={image3.childImageSharp.fluid} subHead={card3.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card4.body} svgTextColor={"text-teal-400"}  head={card4.fullName} imgFluid={image4.childImageSharp.fluid} subHead={card4.title} bgColor={"bg-teal-400"} />
                </div>
                <div className="hover:scale-105 transform transition-transform duration-200 px-4 pb-4 sm:w-1/3 w-full">
                    <SlantCard body={card5.body} svgTextColor={"text-teal-400"}  head={card5.fullName} imgFluid={image5.childImageSharp.fluid} subHead={card5.title} bgColor={"bg-teal-400"} />
                </div>
            </div>
        </Layout>
    )
}