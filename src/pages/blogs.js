
import React, {useState} from 'react'
import SlantedColorCard from '../components/homogenous/SlantedColorCard'
import Navbar from '../components/homogenous/NavBar'
import Hero from '../components/homogenous/Hero'
import image from '../assets/img/youth_sunset.jpg'


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


    return (
        <div>
            <Navbar transparentNavbar />
            <Hero caption="changeNav, merge ui-ref to master" mainText="Bismillah" heroImage={image} />
            <SlantedColorCard tailwindColor="white" title="test" caption="test test test test test test test test test test test test test test test" /> 
        </div>

    )
}