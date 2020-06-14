
import React, {useState} from 'react'
import SlantedColorCard from '../components/homogenous/SlantedColorCard'
import Navbar from '../components/homogenous/NavBar'
import Hero from '../components/homogenous/Hero'
import image from '../assets/img/youth_sunset.jpg'

const cp = "test test test test test test test test test test test test test test test";
export default () => {
    // const data = useStaticQuery(graphql`
    // {
    //     allMarkdownRemark(limit: 4, filter: {frontmatter: {type: {eq: "blog"}}}){
    //     edges{
    //         node{
    //         html
    //         frontmatter{
    //             caption
    //             title
    //             date
    //         }
    //         }
    //     }
    //     }
    // }`);

    // const blogCards = data.allMarkdownRemark.edges.map((node, i) => {
    //     <div></div>
    // });

    const BigCard = ({text}) => {
        /**
         * side by side image and text area, must be flex on small, full width on mobile, big on small and above
         *  
         * 
         * 
         * 
         */
        return (
            <div className="flex max-w-full flex-wrap rounded-lg border-black --  m-4">
                <div className=" sm:w-6/12 object-cover h-full rounded-lg overflow-hidden ">
                    <img src={image} alt="big image"></img>
                </div>
                <div className=" h-full p-10">
                    <h1 className=" sm:text-6xl text-3xl text-gray-700">
                        Newest Blog
                    </h1>
                    <p className="text-gray-700 text-sm">
                        {text}
                    </p>
                </div>
            </div>
        )
    }

    const Card = ({title, caption, blogImg}) => {
        return (
            <div className="w-11/12 sm:max-w-md rounded-md bg-gray-300 overflow-hidden shadow-2xl">
                <img className="w-full rounded-lg" src={blogImg} alt="some image" />
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2"> {title}
                    </div>
                    <p className="text-gray-700 text-base">
                        {caption}
                    </p>
                </div>
            </div>
        )
    }

    const bigText = "Some large test to see if this will work"
    return (
        <div>
            <Navbar  />
            
            
            <div className="container mx-auto sm:mt-64 mt-32">
                <BigCard text={bigText} />
            
                <div className=" sm:flex flex-wrap justify-around items-start">
                
                    <Card caption={"test content test content test content test content"} blogImg={image} title={"One"} />
                    <Card caption={"test content test content test content test content"} blogImg={image} title={"Two"} />
                    <Card caption={"test content test content test content test content"} blogImg={image} title={"Three"} />
                    <Card caption={"test content test content test content test content"} blogImg={image} title={"Four"} />
                    <Card caption={"test content test content test content test content"} blogImg={image} title={"Five"} />
                </div>
            </div>
        </div>

    )
}