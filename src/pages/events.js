import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'

import SlantCard from '../components/homogenous/SlantCard';





    
    /**come back to this idea, random color for cards, but not random on each visit */
    //"text-teal-400", "text-orange-200", "btext-reen-500", "text-purple-200", "text-red-800", "text-blue-800", "text-indigo-700"
    //"bg-teal-400", "bg-orange-200", "bg-green-500", "bg-purple-200", "bg-red-800", "bg-blue-800", "bg-indigo-700"
    //const colorList = ["teal-400", "orange-200", "green-500", "purple-200", "red-800", "blue-800", "indigo-700"];
    //const randomColor = () => colorList[Math.floor(Math.random() * colorList.length)];
    
    
    //get the array of nodes that contain the fields i need including the slug
export default  ({data, location}) => {
    const [upcoming, setUpcoming] = useState([]);
    const [passed, setPassed] = useState([]);
    const [showPassed, setShowPassed] = useState(false);
    useEffect(() => {
        partitionEvents(data.allMarkdownRemark.edges);
    }, []);
    //divide events into 2 buckets, passed and current, update state with each
    const partitionEvents = (nodes) => {
        nodes.forEach( ( { node } )  => {
            const currentDate = Date.now()
            const endDate = new Date(node.frontmatter.startDate);
            const isFutureEvent = endDate > currentDate
            
            if (isFutureEvent) {
                upcoming.push(node);
            }    
            else { 
                passed.push(node);
            }
        });
        setUpcoming(upcoming);
        setPassed(passed);
    }
    //based on the state, show either passed or current events
    const mapToCards =(nodes) => {
        console.log(upcoming, passed)
        try {
            console.log(nodes, "is what i see")
            return (
                nodes.map( ( { frontmatter, fields }, i ) => {
                    const eventImage = frontmatter.eventImage;
                    return (
                        <div key={i} className="hover:scale-105 transform transition-transform duration-200 sm:p-2 pb-6 px-6 sm:pb-10 sm:w-1/3 w-full h-full">
                            <Link to={fields.slug}>
                                <SlantCard body={frontmatter.description} 
                                svgTextColor={`text-indigo-700`}  
                                head={frontmatter.title}
                                tags={frontmatter.tags && frontmatter.tags.split(" ")}
                                tagTextColor={"text-gray-200"}
                                tagBgColor={"bg-green-900"}
                                imgFluid={eventImage && eventImage.childImageSharp.fluid} 
                                subHead={`${frontmatter.startDate}`} 
                                bgColor={`bg-indigo-700`} />
                            </Link>
                        </div>
                    );
                })
            )   
        }catch{
        }
    }
    return(
        <Layout bgGradientColor="yellowBlue-topBottom">
        <div className="text-center">
            <div className=" inline-block sm:mt-0 sm:pt-10 mb-20 pt-32  " >
                <PageHeadText text="Y.A.R Center Events" />
            </div>
        </div>
        <PageBar showPassed={setShowPassed} />
        <div className="flex flex-wrap mt-10 z-10 relative">
            { showPassed? mapToCards(passed):mapToCards(upcoming) }     
        </div>
        </Layout>
    )
}



export const query = graphql`
{
    allMarkdownRemark(limit: 1000
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

export const PageBar = ({ showPassed }) => {
    const [seleced, setSelected] = useState("");
    const selection = ["Upcoming Events, Passed Events"]
    return (
        <div className="container mx-auto border-b-2 border-gray-600 h-8 bg-opacity-50">
            <div className="w-1/3 text-center inline-block">
                <button onClick={() => showPassed(false)} className="font-hairline sm:text-xl text-xs"> Upcoming Events </button>
            </div>    
        
            <div className="w-1/3 text-center inline-block">
                <button onClick={() => showPassed(true)} className="font-hairline sm:text-xl text-xs"> Passed Events </button>
            </div>
            
        </div>
    )
}