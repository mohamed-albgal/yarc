
import React, {useState} from 'react'
import SlantedColorCard from '../components/homogenous/SlantedColorCard'
import Navbar from '../components/homogenous/NavBar'
import Hero from '../components/homogenous/Hero'
import image from '../assets/img/youth_sunset.jpg'
import Layout from '../components/Layout'

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
        return (
            <div className="flex max-w-full flex-wrap shadow-xl m-4">
                <div className="order-first sm:w-2/3 object-cover sm:rounded-l-lg sm:rounded-r-none rounded-lg h-full overflow-hidden ">
                    <img src={image} alt="big image"></img>
                </div>
                <div className=" order-last sm:w-1/3 rounded-lg border-blue-100 w-full  bg-gray-200">
                    <div className=" sm:h-full flex-grow p-10 ">
                        <h1 className=" sm:text-6xl text-3xl text-gray-700">
                            Newest Blog
                        </h1>
                        <p className="text-gray-700 text-sm max-h-full">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    const BasicCard = ({title, caption, blogImg}) => {
        return (
            <div className="w-11/12 sm:max-w-md rounded-md bg-gray-300 overflow-hidden shadow-2xl sm:mx-4 sm:my-8 my-8 mx-auto">
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
        <Layout>
            <div className="container mx-auto sm:mt-56 bg-gray-200">
                <BigCard text={bigText} />
                <div className=" sm:flex flex-wrap justify-start">
                    <BasicCard caption={"test content test content test content test content"} blogImg={image} title={"One"} />
                    <BasicCard caption={"test content test content test content test content"} blogImg={image} title={"Two"} />
                    <BasicCard caption={"test content test content test content test content"} blogImg={image} title={"Three"} />
                    <BasicCard caption={"test content test content test content test content"} blogImg={image} title={"Four"} />
                    <BasicCard caption={"test content test content test content test content"} blogImg={image} title={"Five"} />
                </div>
            </div>
        </Layout>

    )
}