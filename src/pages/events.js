import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'

import SlantCard from '../components/homogenous/SlantCard';






export default  ({data}) => {
    
    /**come back to this idea, random color for cards, but not random on each visit */
    //"text-teal-400", "text-orange-200", "btext-reen-500", "text-purple-200", "text-red-800", "text-blue-800", "text-indigo-700"
    //"bg-teal-400", "bg-orange-200", "bg-green-500", "bg-purple-200", "bg-red-800", "bg-blue-800", "bg-indigo-700"
    //const colorList = ["teal-400", "orange-200", "green-500", "purple-200", "red-800", "blue-800", "indigo-700"];
    //const randomColor = () => colorList[Math.floor(Math.random() * colorList.length)];
    
    
    //get the array of nodes that contain the fields i need including the slug
    const nodes = data.allMarkdownRemark.edges
    
    const dataBurger = nodes.map( ( { node }, i ) => (
            <div key={i} className="hover:scale-105 transform transition-transform duration-200 px-4 sm:pb-10 pb-4 sm:w-1/3 w-full h-full">
                <Link to={node.fields.slug}>
                    <SlantCard body={node.frontmatter.description} 
                    svgTextColor={`text-indigo-700`}  
                    head={node.frontmatter.title}
                    tags={node.frontmatter.tags.split(" ")}
                    tagTextColor={"text-gray-200"}
                    tagBgColor={"bg-green-900"}
                    imgFluid={node.frontmatter.eventImage.childImageSharp.fluid} 
                    subHead={`${node.frontmatter.endDate ? node.frontmatter.startDate + " - " + node.frontmatter.endDate: node.frontmatter.startDate}`} 
                    bgColor={`bg-indigo-700`} />
                </Link>
            </div>
            )
        )
    return(
        <Layout bgGradientColor="yellowBlue-topBottom">
        <div className="text-center">
            <div className=" inline-block sm:mt-0 sm:pt-10 mb-20 pt-32  " >
                <PageHeadText text="Upcoming Events" />
            </div>
        </div>
        <div className="flex flex-wrap mt-10 z-10 relative">
            {dataBurger}        
        </div>
        </Layout>
    )
}



export const query = graphql`
{
    allMarkdownRemark(limit: 10
        sort: { order: DESC, fields: [frontmatter___startDate]}
        filter: {fileAbsolutePath: {regex: "/(events)/"}}) {
            edges {
                node{
                frontmatter{
                    title
                    description
                    tags
                    startDate(formatString: "MMMM DD, YYYY")
                    endDate(formatString: "MMMM DD, YYYY")
                    type
                    eventImage{
                        childImageSharp{
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                              }
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
}
`


