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
export default  ({ data }) => {
    const [upcoming, setUpcoming] = useState([]);
    const [passed, setPassed] = useState([]);
    const [showPassed, setShowPassed] = useState(false);
    useEffect(() => {
        const [old, neu ] = splitData(data.allMarkdownRemark.edges);
        setUpcoming(neu);
        setPassed(old);
    }, [data.allMarkdownRemark.edges]);
    //divide events into 2 buckets, passed and current, update state with each
    const splitData = (nodes) => {
        const neu = [];
        const old = [];
        nodes.forEach( ( { node } )  => {
            const currentDate = Date.now()
            const endDate = new Date(node.frontmatter.startDate);
            const isFutureEvent = endDate > currentDate
            
            if (isFutureEvent) {
                neu.push(node);
            }    
            else { 
                old.push(node);
            }
        });
        return ([old, neu])
    }
    //based on the state, show either passed or current events
    const makeCards =() => {
            const nodes = showPassed ? passed : upcoming
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
            { makeCards() }     
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

//this is tightly coupled, on re-factor, fix to make this more flexible
export const PageBar = ({ showPassed }) => {
    const [selected, setSelected] = useState(0);
    const selections = ["Upcoming Events", "Past Events"]
    const divStyle = "w-1/2 text-center inline-block border-b border-gray-600"
    const buttonStyle ="font-hairline sm:text-xl w-full text-xs text-gray-600"
    const selectedDivStyle = " border-b-2 border-indigo-500";
    const selectedButtonStyle = "tracking-wider font-thin text-indigo-700 "
    const showSelections = selections.map( (elt, i) => (
            <div key={i} className={` ${divStyle} ${selected === i && selectedDivStyle} `}>
                <button onClick={() => handleClick(i)} className={`${selected === i && selectedButtonStyle} ${buttonStyle} `}> {elt} </button>
            </div>
        )
    )

    const handleClick = (i) => {
        if ( i > 0)
            showPassed(true)
        else showPassed(false)
        setSelected(i);
    }
    return (
        <div className="container mx-auto  h-8 bg-opacity-50">
            {showSelections}
        </div>
    )
}