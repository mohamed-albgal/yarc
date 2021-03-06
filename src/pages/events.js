import React, { useState, useEffect } from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import PageHeadText from '../components/homogenous/PageHeadText'
import SlantCard from '../components/homogenous/SlantCard';
import useDatePartion from '../hooks/useDatePartition'


    /**come back to this idea, random color for cards, but not random on each visit */
    //"text-teal-400", "text-orange-200", "btext-reen-500", "text-purple-200", "text-red-800", "text-blue-800", "text-indigo-700"
    //"bg-teal-400", "bg-orange-200", "bg-green-500", "bg-purple-200", "bg-red-800", "bg-blue-800", "bg-indigo-700"
    //const colorList = ["teal-400", "orange-200", "green-500", "purple-200", "red-800", "blue-800", "indigo-700"];
    //const randomColor = () => colorList[Math.floor(Math.random() * colorList.length)];
    //get the array of nodes that contain the fields i need including the slug
export default  ({ data }) => {
    const intl = useIntl();
    const [selection, setSelection] = useState(0);
    const [upcoming, passed] = useDatePartion(data);
    
    const barSelections = {}
    barSelections[intl.formatMessage({id:"eventsCategories.upcoming"})] = upcoming;
    barSelections[intl.formatMessage({id:"eventsCategories.past"})] = passed;
    const noEventsMessage = 
    (
        <div className="container sm:ml-5 sm:max-w-screen-sm">
            <div className="px-20 text-xl  bg-green-200 text-gray-600">{intl.formatMessage({id:"eventsNoUpcoming"})}</div>
        </div>
    )
    const onBarSelect = (i) => setSelection(i);
    const makeCards =(i) => {
            const key = Object.keys(barSelections)[i];
            const nodes = barSelections[key]
            if (nodes.length === 0)
                return noEventsMessage;
            
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
        <Layout navWithHero bgGradientColor="yellowBlue-topBottom">
        <div className=" sm:mt-0 sm:px-16 mx-4 sm:pt-10 mb-32 pt-32 " >
                <div className={` inset-0 sm:mt-40`}>
                    <PageHeadText text={intl.formatMessage({id:"eventsHeadText"})} />
                </div>
        </div>
        <div className="text-center">
        </div>
        <PageBar onBarSelect={onBarSelect} externalSelection='0' barSelections={Object.keys(barSelections)} />
        <div className="flex flex-wrap mt-10 sm:px-16 z-10 relative">
            { makeCards(selection) }     
        </div>
        </Layout>
    )
}

//this is tightly coupled, on re-factor, fix to make this more flexible
export const PageBar = (props) => {
    const [selected, setSelected] = useState(0);
    useEffect(() => {
      setSelected(props.externalSelection)  
    },[props.externalSelection])
    const selections = props.barSelections;
    const divStyle = props.divStyle || "w-1/2 text-center inline-block border-b border-green-700 hover:border-yellow-700"
    const selectedDivStyle = props.selectedDivStyle ||" w-1/2 text-center inline-block border-b-2 border-green-900 ";
    const buttonStyle =props.buttonStyle || "font-hairline sm:text-xl w-full text-xs text-black hover:text-yellow-700"
    const selectedButtonStyle = props.selectedButtonStyle ||"tracking-wider sm:text-xl w-full text-xs font-normal text-green-900 "
    
    
    const showSelections = selections.map( (elt, i) => {
        return (
            <div key={i} className={`${selected == i ? selectedDivStyle : divStyle } `}>
                <button onClick={() => handleClick(i)} className={`${selected == i ? selectedButtonStyle : buttonStyle} `}> {elt} </button>
            </div>
        )
    }
    )
    const handleClick = (i) => {
        props.onBarSelect(i);
        setSelected(i);
    }
    return (
        <div className="container mx-auto  h-8 bg-opacity-50">
            {showSelections}
        </div>
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